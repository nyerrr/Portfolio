'use client'

import { motion } from 'framer-motion'
import { personalInfo, stats } from '@/lib/data'
import Image from 'next/image'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.dotBg} />

            <div className={styles.layout}>

                {/* LEFT — text */}
                <div className={styles.left}>
                    <motion.div
                        className={styles.availableTag}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.pulse} />
                        available for work
                    </motion.div>

                    <motion.h1
                        className={styles.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {personalInfo.name.split(' ')[0]} <span>{personalInfo.name.split(' ')[1]}</span>
                    </motion.h1>

                    <motion.p
                        className={styles.role}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        // {personalInfo.role.toLowerCase()}
                    </motion.p>

                    <motion.p
                        className={styles.desc}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {personalInfo.description}
                    </motion.p>

                    <motion.div
                        className={styles.btns}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a href="#work" className={styles.btnPrimary}>view work →</a>
                        <a href={personalInfo.resumeUrl} download className={styles.btnGhost}>download resume</a>
                    </motion.div>

                    <motion.div
                        className={styles.stats}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className={styles.statNum}>
                                    {stat.number.replace('+', '')}<span>+</span>
                                </div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT — profile image */}
                <motion.div
                    className={styles.right}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className={styles.imageFrame}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/profile.jpg"
                                alt="Rainier Burlasa"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}