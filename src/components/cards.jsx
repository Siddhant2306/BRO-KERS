import React from 'react'
import '../css/card.css'

export function Card({ title, desc, icon }){
  return (
    <div className="card">
      {icon && <div className="card-icon" aria-hidden>{icon}</div>}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

export function CardGrid({ children }){
  return <div className="card-grid">{children}</div>
}