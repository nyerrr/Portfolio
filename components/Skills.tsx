'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import styles from './Skills.module.css'

export default function Skills() {
    return (
        <section id="stack" className={styles.section}>
            <div className={styles.sectionLabel}>stack</div>
            <motion.div
                className={styles.grid}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        className={styles.cell}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                        <div className={styles.name}>{skill.name}</div>
                        <div className={styles.cat}>{skill.category}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}