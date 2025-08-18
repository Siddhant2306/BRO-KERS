import React from 'react'
import Table from '../components/Table'
import '../css/page.css'

export default function Properties(){
  return (
    <section className="page">
      <h2>Properties</h2>
      <p>Browse current offerings and track demand, growth and status.</p>
      <Table />
    </section>
  )
}