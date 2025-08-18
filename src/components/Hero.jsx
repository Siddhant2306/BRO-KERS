import React from 'react'
import Buttons from './Buttons'
import '../css/hero.css'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>Breaking Barriers to Real Estate</h1>
        <p>Invest in land shares. No brokers. Global access. Liquidity built-in.</p>
        <div className="hero-cta">
          <Buttons variant="primary">Start Investing</Buttons>
          <Buttons variant="ghost">Learn More</Buttons>
        </div>
      </div>
    </section>
  )
}