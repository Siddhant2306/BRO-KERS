import React from 'react'
import Buttons from './Buttons'
import '../css/cta.css'

export default function CTA(){
  return (
    <section className="cta">
      <h2>Own a share of land today</h2>
      <p>Join BRO-KERS and start building your real estate portfolio with small, transparent investments.</p>
      <Buttons variant="primary">Create Account</Buttons>
    </section>
  )
}
