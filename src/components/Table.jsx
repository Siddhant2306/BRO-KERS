import React from 'react'
import '../css/table.css'

export default function Table(){
  const data = [
    { name: 'Mumbai Plot (Andheri)', price: '₹5,000/share', growth: '+12%', status: 'Open' },
    { name: 'Delhi Land (Dwarka)', price: '₹3,000/share', growth: '+8%', status: 'Open' },
    { name: 'Bengaluru Project (Whitefield)', price: '₹4,500/share', growth: '+15%', status: 'Waitlist' },
  ]

  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th>Property</th>
            <th>Price/Share</th>
            <th>Growth</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row,i)=> (
            <tr key={i}>
              <td>{row.name}</td>
              <td>{row.price}</td>
              <td>{row.growth}</td>
              <td><span className={`badge ${row.status==='Open'?'success':'warning'}`}>{row.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
