import React from 'react'
import '../css/metrics.css'

export default function Metrics(){
  const items = [
    { label: 'Investors', value: '25k+' },
    { label: 'Cities', value: '40+' },
    { label: 'Avg. ROI (demo)', value: '14%' },
    { label: 'Listed Land', value: '₹120Cr+' },
  ]
  return (
    <section className="metrics">
      {items.map((it,i)=> (
        <div className="metric" key={i}>
          <div className="metric-value">{it.value}</div>
          <div className="metric-label">{it.label}</div>
        </div>
      ))}
    </section>
  )
}