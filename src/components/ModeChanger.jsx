import React, { useEffect, useState } from 'react'

export default function ModeChanger(){
  const [isLight, setIsLight] = useState(() => localStorage.getItem('theme') !== 'dark')

  useEffect(() => {
    const theme = isLight ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [isLight])

  return (
    <button className="mode-btn" onClick={() => setIsLight(!isLight)} aria-label="Toggle theme">
      {isLight ? '🌞' : '🌙'}
    </button>
  )
}