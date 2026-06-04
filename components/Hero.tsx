'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personalInfo, stats } from '@/lib/data'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-12 pt-24 pb-16 overflow-hidden">

      {/* dot grid background */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #2a2a2a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-4xl">

        {/* available tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 font-mono text-xs text-[#7fffb2] tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#7fffb2] animate-pulse" />
          available for work
        </motion.div>

        {/* name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-6xl md:text-7xl font-bold leading-tight text-[#f0f0f0] mb-2"
        >
          {personalInfo.name.split(' ')[0]}{' '}
          <span className="text-[#7fffb2]">
            {personalInfo.name.split(' ')[1]}
          </span>
        </motion.h1>

        {/* role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-base text-[#444] tracking-wider mb-8"
        >
          // {personalInfo.role.toLowerCase()} · 5 years
        </motion.p>

        {/* description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-[#777] leading-relaxed max-w-lg mb-12 font-light"
        >
          {personalInfo.description}
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#work"
            className="font-mono text-sm px-7 py-3 bg-[#7fffb2] text-[#0a0a0a] font-bold rounded tracking-wider hover:opacity-80 transition-all duration-200 hover:-translate-y-0.5"
          >
            view work →
          </a>
          <a
            href={personalInfo.resumeUrl}
            className="font-mono text-sm px-7 py-3 border border-[#222] text-[#666] rounded tracking-wider hover:border-[#7fffb2] hover:text-[#7fffb2] transition-all duration-200 hover:-translate-y-0.5"
          >
            download resume
          </a>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-12 mt-16 pt-10 border-t border-[#1a1a1a]"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-mono text-3xl font-bold text-[#f0f0f0]">
                {stat.number.replace('+', '')}
                <span className="text-[#7fffb2]">+</span>
              </div>
              <div className="text-xs text-[#555] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}