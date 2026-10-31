'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import type { Message } from '@/lib/chat'
import BlockView from './Blocks'
import styles from './Thread.module.css'

type Props = {
    messages: Message[]
    thinking: boolean
    onPrompt: (prompt: string) => void
}

export default function Thread({ messages, thinking, onPrompt }: Props) {
    const scroller = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = scroller.current
        if (!el) return
        el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
    }, [messages.length, thinking])

    return (
        <div className={styles.thread} ref={scroller}>
            <div className={styles.column}>
                {messages.map((message) =>
                    message.role === 'user' ? (
                        <motion.div
                            key={message.id}
                            id={`msg-${message.id}`}
                            className={styles.userRow}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className={styles.bubble}>{message.text}</div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={message.id}
                            id={`msg-${message.id}`}
                            className={styles.assistantRow}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.avatar} aria-hidden="true">
                                RB
                            </div>
                            <div className={styles.body}>
                                {message.blocks?.map((block, i) => (
                                    <BlockView key={`${message.id}-${i}`} block={block} />
                                ))}
                                {message.prompts && message.prompts.length > 0 && (
                                    <div className={styles.prompts}>
                                        {message.prompts.map((prompt) => (
                                            <button
                                                key={prompt}
                                                className={styles.prompt}
                                                onClick={() => onPrompt(prompt)}
                                            >
                                                {prompt}
                                                <ArrowUp size={12} className={styles.promptArrow} />
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )
                )}

                {thinking && (
                    <div className={styles.assistantRow}>
                        <div className={styles.avatar} aria-hidden="true">
                            RB
                        </div>
                        <div className={styles.typing} aria-label="Thinking">
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
