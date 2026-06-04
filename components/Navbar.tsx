'use client'

import { useState, useEffect } from 'react'
import { personalInfo } from '@/lib/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-5 transition-all duration-300 ${
        scrolled ? 'border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md' : ''
      }`}
    >
      <div className="font-mono text-sm text-[#7fffb2] tracking-wider">
        ~/portfolio
      </div>

      <ul className="flex gap-8 list-none">
        {['work', 'stack', 'contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="font-mono text-xs text-[#555] hover:text-[#7fffb2] tracking-widest transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}