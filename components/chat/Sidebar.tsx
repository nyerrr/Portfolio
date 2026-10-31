'use client'

import Image from 'next/image'
import { User, FolderGit2, Cpu, Mail, FileText, Plus, X, MessageSquare } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import styles from './Sidebar.module.css'

export type HistoryItem = { id: string; text: string }

type Props = {
    open: boolean
    onClose: () => void
    history: HistoryItem[]
    activeId: string
    onNewChat: () => void
    onPrompt: (prompt: string) => void
    onJump: (id: string) => void
}

const SECTIONS = [
    { label: 'Profile overview', prompt: 'Who are you?', icon: User },
    { label: 'Selected work', prompt: 'Show me your projects', icon: FolderGit2 },
    { label: 'Tech stack', prompt: "What's your tech stack?", icon: Cpu },
    { label: 'Contact', prompt: 'How can I reach you?', icon: Mail },
    { label: 'Résumé', prompt: 'Download your resume', icon: FileText },
]

export default function Sidebar({
    open,
    onClose,
    history,
    activeId,
    onNewChat,
    onPrompt,
    onJump,
}: Props) {
    return (
        <>
            <aside className={`${styles.sidebar} ${open ? styles.open : ''}`}>
                <div className={styles.brand}>
                    <span className={styles.mark}>RB</span>
                    <span className={styles.brandText}>rainier.portfolio</span>
                    <button className={styles.close} onClick={onClose} aria-label="Close sidebar">
                        <X size={16} />
                    </button>
                </div>

                <button className={styles.newChat} onClick={onNewChat}>
                    <Plus size={15} />
                    New chat
                </button>

                <nav className={styles.group}>
                    <div className={styles.groupLabel}>Portfolio</div>
                    <ul className={styles.list}>
                        {SECTIONS.map((section) => (
                            <li key={section.label}>
                                <button className={styles.item} onClick={() => onPrompt(section.prompt)}>
                                    <section.icon size={14} className={styles.itemIcon} />
                                    <span>{section.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className={`${styles.group} ${styles.historyGroup}`}>
                    <div className={styles.groupLabel}>Today</div>
                    {history.length === 0 ? (
                        <p className={styles.empty}>Your questions will show up here.</p>
                    ) : (
                        <ul className={styles.list}>
                            {history.map((item) => (
                                <li key={item.id}>
                                    <button
                                        className={`${styles.item} ${activeId === item.id ? styles.itemActive : ''}`}
                                        onClick={() => onJump(item.id)}
                                        title={item.text}
                                    >
                                        <MessageSquare size={13} className={styles.itemIcon} />
                                        <span className={styles.itemText}>{item.text}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>

                <div className={styles.footer}>
                    <div className={styles.avatar}>
                        <Image src="/profile.jpg" alt="" width={30} height={30} className={styles.avatarImg} />
                    </div>
                    <div className={styles.who}>
                        <span className={styles.whoName}>{personalInfo.name}</span>
                        <span className={styles.whoStatus}>
                            <span className={styles.dot} />
                            available for work
                        </span>
                    </div>
                </div>
            </aside>

            <div className={`${styles.backdrop} ${open ? styles.backdropOpen : ''}`} onClick={onClose} />
        </>
    )
}
