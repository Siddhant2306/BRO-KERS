import React from 'react'
import '../css/buttons.css'

export default function Buttons({ variant = 'primary', children, onClick, to }){
  const className = `btn ${variant}`
  if(to){
    return <a className={className} href={to} onClick={onClick}>{children}</a>
  }
  return <button className={className} onClick={onClick}>{children}</button>
}
