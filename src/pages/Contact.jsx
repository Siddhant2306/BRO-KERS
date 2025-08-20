import React, { useState, useEffect } from 'react'
import '../css/page.css'

export default function Contact() {
  const [contacts, setContacts] = useState([])

  // ---------- API FUNCTIONS ----------

  async function getContacts() {
    const res = await fetch("http://localhost:8080/contacts")
    const data = await res.json()
    setContacts(data)
  }

  async function addContact(contact) {
    const response = await fetch("http://localhost:8080/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    })
    const data = await response.json()
    getContacts() // refresh list after adding
    return data
  }

  async function updateContact(id, updatedContact) {
    const response = await fetch(`http://localhost:8080/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact)
    })
    const data = await response.json()
    getContacts() // refresh list after updating
    return data
  }

  async function deleteContact(id) {
    await fetch(`http://localhost:8080/contacts/${id}`, {
      method: "DELETE"
    })
    getContacts() // refresh list after deleting
  }

  // ---------- FORM HANDLER ----------
  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const newContact = {
      name: form[0].value,
      email: form[1].value,
      message: form[2].value,
    }
    addContact(newContact)
    form.reset()
    alert('Thanks! We will get back to you shortly.')
  }

  // Load contacts when component mounts
  useEffect(() => {
    getContacts()
  }, [])

  return (
    <section className="page">
      <h2>Contact Us</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Full Name<input type="text" required /></label>
        <label>Email<input type="email" required /></label>
        <label>Message<textarea rows="5" required /></label>
        <button className="btn primary" type="submit">Send</button>
      </form>

      <h3 className='all-cont.'>All Contacts</h3>
      <ul>
        {contacts.map((c) => (
          <li key={c.id}>
            <strong>{c.name}</strong> ({c.email}) - {c.message}
            <button onClick={() => deleteContact(c.id)}>Delete</button>
            <button onClick={() => updateContact(c.id, { ...c, message: "Updated!" })}>
              Quick Update
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
