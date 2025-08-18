import React from 'react'
import '../css/page.css'

export default function Contact(){
  function handleSubmit(e){
    e.preventDefault()
    alert('Thanks! We will get back to you shortly.')
  }

  return (
    <section className="page">
      <h2>Contact Us</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>Full Name<input type="text" required /></label>
        <label>Email<input type="email" required /></label>
        <label>Message<textarea rows="5" required /></label>
        <button className="btn primary" type="submit">Send</button>
      </form>
    </section>
  )
}