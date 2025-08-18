import React from 'react'
import '../css/page.css'

export default function FAQ(){
  const faqs = [
    { q: 'Is paperwork required?', a: 'We use digital agreements and KYC; you get legal rights via SPV/tokens depending on jurisdiction.' },
    { q: 'Can I sell anytime?', a: 'Yes, through our secondary market. Short withdrawal delays protect builder cash flows.' },
    { q: 'What s the minimum investment?', a: 'Entry points are designed to be affordable (e.g., ₹10k ₹50k). Exact minimums may vary per project.' },
  ]
  return (
    <section className="page">
      <h2>FAQs</h2>
      {faqs.map((f,i)=> (
        <details key={i} className="faq">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </section>
  )
}
