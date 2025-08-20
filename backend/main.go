package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Contact struct {
	ID      int    `json:"id"`
	Name    string `json:"name"`
	Email   string `json:"email"`
	Message string `json:"message"`
}

var contacts []Contact
var dataFile = "contacts.json"

func loadContacts() {
	file, err := os.ReadFile(dataFile)
	if err == nil {
		json.Unmarshal(file, &contacts)
	}
}

func saveContacts() {
	file, _ := json.MarshalIndent(contacts, "", "  ")
	os.WriteFile(dataFile, file, 0644)
}

func getContacts(c *gin.Context) {
	c.JSON(http.StatusOK, contacts)
}

func addContact(c *gin.Context) {
	var newContact Contact
	if err := c.BindJSON(&newContact); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	newContact.ID = len(contacts) + 1
	contacts = append(contacts, newContact)
	saveContacts()
	c.JSON(http.StatusOK, newContact)
}

func updateContact(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	var updated Contact

	if err := c.BindJSON(&updated); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	for i, contact := range contacts {
		if contact.ID == id {
			contacts[i].Name = updated.Name
			contacts[i].Email = updated.Email
			contacts[i].Message = updated.Message
			saveContacts()
			c.JSON(http.StatusOK, contacts[i])
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Contact not found"})
}

func deleteContact(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))

	for i, contact := range contacts {
		if contact.ID == id {
			contacts = append(contacts[:i], contacts[i+1:]...)
			saveContacts()
			c.JSON(http.StatusOK, gin.H{"message": "Deleted"})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "Contact not found"})
}

func main() {
	loadContacts()

	r := gin.Default()

	// ✅ Enable CORS for React frontend at port 5173
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		AllowCredentials: true,
	}))

	// Routes
	r.GET("/contacts", getContacts)
	r.POST("/contacts", addContact)
	r.PUT("/contacts/:id", updateContact)
	r.DELETE("/contacts/:id", deleteContact)

	fmt.Println("Server running at http://localhost:8080")
	r.Run(":8080")
}
