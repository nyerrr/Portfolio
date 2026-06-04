'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.logo}>PORTFOLIO</div>
            <ul className={styles.links}>
                {['work', 'stack', 'contact'].map((item) => (
                    <li key={item}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}