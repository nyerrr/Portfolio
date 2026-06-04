'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import styles from './Projects.module.css'

export default function Projects() {
    return (
        <section id="work" className={styles.section}>
            <div className={styles.sectionLabel}>selected work</div>
            <div className={styles.grid}>
                {projects.map((project, i) => (
                    <motion.a
                        key={project.number}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.card}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <div className={styles.num}>{project.number}</div>
                        <div className={styles.title}>{project.title}</div>
                        <p className={styles.desc}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <span key={tag} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}