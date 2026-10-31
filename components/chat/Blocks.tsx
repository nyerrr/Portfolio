'use client'

import Image from 'next/image'
import { Mail, GitBranch, LinkIcon, Download, ArrowUpRight } from 'lucide-react'
import { personalInfo, projects, skills, stats } from '@/lib/data'
import type { Block } from '@/lib/chat'
import styles from './Blocks.module.css'

const resumeFileName = decodeURIComponent(personalInfo.resumeUrl).split('/').pop()

const contactLinks = [
    { key: 'email', label: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: Mail },
    { key: 'github', label: personalInfo.github.replace('https://', ''), href: personalInfo.github, icon: GitBranch },
    { key: 'linkedin', label: personalInfo.linkedin.replace('https://', ''), href: personalInfo.linkedin, icon: LinkIcon },
]

export default function BlockView({ block }: { block: Block }) {
    switch (block.kind) {
        case 'hero':
            return <HeroBlock />
        case 'projects':
            return <ProjectsBlock only={block.only} />
        case 'skills':
            return <SkillsBlock />
        case 'contact':
            return <ContactBlock />
        case 'resume':
            return <ResumeBlock />
        case 'text':
            return <p className={styles.text}>{block.text}</p>
    }
}

function HeroBlock() {
    return (
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <div className={styles.available}>
                    <span className={styles.pulse} />
                    available for work
                </div>

                <h1 className={styles.name}>
                    {personalInfo.name.split(' ')[0]} <span>{personalInfo.name.split(' ')[1]}</span>
                </h1>

                <p className={styles.role}>{personalInfo.role}</p>
                <p className={styles.desc}>{personalInfo.description}</p>

                <div className={styles.btns}>
                    <a href={personalInfo.resumeUrl} download={resumeFileName} className={styles.btnPrimary}>
                        <Download size={14} />
                        download resume
                    </a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.btnGhost}>
                        github
                        <ArrowUpRight size={14} />
                    </a>
                </div>

                <div className={styles.stats}>
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <div className={styles.statNum}>
                                {stat.number.replace('+', '')}
                                <span>+</span>
                            </div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.photoFrame}>
                <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    width={280}
                    height={350}
                    className={styles.photo}
                    priority
                />
            </div>
        </div>
    )
}

function ProjectsBlock({ only }: { only?: string[] }) {
    const shown = only ? projects.filter((project) => only.includes(project.title)) : projects

    return (
        <div className={styles.grid}>
            {shown.map((project) => (
                <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.card}
                >
                    <div className={styles.cardTop}>
                        <span className={styles.num}>{project.number}</span>
                        <ArrowUpRight size={14} className={styles.cardArrow} />
                    </div>
                    <div className={styles.title}>{project.title}</div>
                    <p className={styles.cardDesc}>{project.description}</p>
                    <div className={styles.tags}>
                        {project.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div>
    )
}

function SkillsBlock() {
    return (
        <div className={styles.skills}>
            {skills.map((skill) => (
                <span key={skill.name} className={styles.skill}>
                    {skill.name}
                    <em className={styles.skillCat}>{skill.category}</em>
                </span>
            ))}
        </div>
    )
}

function ContactBlock() {
    return (
        <div className={styles.links}>
            {contactLinks.map((link) => (
                <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    <link.icon size={15} className={styles.linkIcon} />
                    <span className={styles.key}>{link.key}</span>
                    <span className={styles.val}>{link.label}</span>
                </a>
            ))}
        </div>
    )
}

function ResumeBlock() {
    return (
        <a href={personalInfo.resumeUrl} download={resumeFileName} className={styles.resume}>
            <div className={styles.resumeIcon}>
                <Download size={16} />
            </div>
            <div className={styles.resumeMeta}>
                <span className={styles.resumeName}>{resumeFileName}</span>
                <span className={styles.resumeHint}>PDF · click to download</span>
            </div>
            <ArrowUpRight size={16} className={styles.resumeArrow} />
        </a>
    )
}
