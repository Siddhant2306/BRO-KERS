import React from 'react'
import { Card, CardGrid } from '../components/cards'
import '../css/page.css'

export default function Features(){
  return (
    <section className="page">
      <h2>Features</h2>
      <CardGrid>
        <Card title="Fractional Ownership" desc="Start with small amounts and scale as you go." />
        <Card title="Global Access" desc="Invest from anywhere in verified land listings." />
        <Card title="No Brokers" desc="Direct builder-to-investor model cuts costs and delays." />
        <Card title="Liquidity" desc="Sell shares anytime on our marketplace." />
      </CardGrid>
    </section>
  )
}