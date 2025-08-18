import React from 'react'
import Hero from '../components/Hero'
import { Card, CardGrid } from '../components/cards'
import Table from '../components/Table'
import Metrics from '../components/Metrics'
import CTA from '../components/CTA'
import '../css/home.css'

export default function Home(){
  return (
    <div className="home">
      <Hero />
      <section className="how">
        <h2>How it works</h2>
        <CardGrid>
          <Card title="1. Builder lists land" desc="Verified builders list land with details, docs and valuation." />
          <Card title="2. Split into shares" desc="We divide the land into affordable digital shares." />
          <Card title="3. Invest & trade" desc="Buy shares, track demand-driven pricing, and trade on our marketplace." />
          <Card title="4. Liquidity + funding" desc="Short withdrawal delays keep builder capital steady while you stay liquid." />
        </CardGrid>
      </section>
      <Metrics />
      <section className="props">
        <h2>Available Properties</h2>
        <Table />
      </section>
      <CTA />
    </div>
  )
}