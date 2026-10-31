'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu, ShieldCheck } from 'lucide-react'
import Sidebar from './chat/Sidebar'
import Thread from './chat/Thread'
import Composer from './chat/Composer'
import { answerFor, welcomeMessage, type Message } from '@/lib/chat'
import styles from './PortfolioChat.module.css'

export default function PortfolioChat() {
    const [messages, setMessages] = useState<Message[]>([welcomeMessage])
    const [thinking, setThinking] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [activeId, setActiveId] = useState('welcome')

    const nextId = useRef(0)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => () => {
        if (timer.current) clearTimeout(timer.current)
    }, [])

    const ask = useCallback(
        (prompt: string) => {
            const text = prompt.trim()
            if (!text || thinking) return

            const userId = `u-${nextId.current++}`
            setMessages((prev) => [...prev, { id: userId, role: 'user', text }])
            setActiveId(userId)
            setSidebarOpen(false)
            setThinking(true)

            timer.current = setTimeout(() => {
                const reply = answerFor(text)
                setMessages((prev) => [
                    ...prev,
                    { id: `a-${nextId.current++}`, role: 'assistant', ...reply },
                ])
                setThinking(false)
            }, 620)
        },
        [thinking]
    )

    const newChat = useCallback(() => {
        if (timer.current) clearTimeout(timer.current)
        setThinking(false)
        setMessages([welcomeMessage])
        setActiveId('welcome')
        setSidebarOpen(false)
    }, [])

    const jump = useCallback((id: string) => {
        setActiveId(id)
        setSidebarOpen(false)
        document.getElementById(`msg-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, [])

    const history = messages
        .filter((message) => message.role === 'user')
        .map((message) => ({ id: message.id, text: message.text ?? '' }))
        .reverse()

    return (
        <div className={styles.app}>
            <Sidebar
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                history={history}
                activeId={activeId}
                onNewChat={newChat}
                onPrompt={ask}
                onJump={jump}
            />

            <div className={styles.main}>
                <header className={styles.topbar}>
                    <button
                        className={styles.menu}
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open sidebar"
                    >
                        <Menu size={17} />
                    </button>

                    <div className={styles.crumbs}>
                        <span className={styles.crumbMuted}>rainier.portfolio</span>
                        <span className={styles.slash}>/</span>
                        <span className={styles.crumb}>portfolio assistant</span>
                    </div>

                    <div className={styles.status}>
                        <ShieldCheck size={13} className={styles.statusIcon} />
                        <span className={styles.statusText}>open to work</span>
                    </div>
                </header>

                <Thread messages={messages} thinking={thinking} onPrompt={ask} />

                <Composer onSend={ask} disabled={thinking} />
            </div>
        </div>
    )
}
