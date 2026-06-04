'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, LinkIcon } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import styles from './Contact.module.css'

const links = [
  { key: 'email', label: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
  { key: 'github', label: personalInfo.github.replace('https://', ''), href: personalInfo.github, icon: GitBranch },
  { key: 'linkedin', label: personalInfo.linkedin.replace('https://', ''), href: personalInfo.linkedin, icon: LinkIcon },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.sectionLabel}>contact</div>
      <motion.div
        className={styles.block}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className={styles.desc}>Have a project in mind or just want to say hi? My inbox is always open.</p>
        {links.map((link, i) => (
          <motion.a
            key={link.key}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <link.icon size={15} color="#7fffb2" />
            <span className={styles.key}>{link.key}</span>
            <span className={styles.val}>{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}