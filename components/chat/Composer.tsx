'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Paperclip } from 'lucide-react'
import styles from './Composer.module.css'

type Props = {
    onSend: (prompt: string) => void
    disabled: boolean
}

export default function Composer({ onSend, disabled }: Props) {
    const [value, setValue] = useState('')
    const area = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        const el = area.current
        if (!el) return
        el.style.height = 'auto'
        el.style.height = `${Math.min(el.scrollHeight, 160)}px`
    }, [value])

    const submit = () => {
        const text = value.trim()
        if (!text || disabled) return
        onSend(text)
        setValue('')
    }

    return (
        <div className={styles.wrap}>
            <form
                className={styles.box}
                onSubmit={(event) => {
                    event.preventDefault()
                    submit()
                }}
            >
                <Paperclip size={16} className={styles.clip} aria-hidden="true" />
                <textarea
                    ref={area}
                    className={styles.input}
                    rows={1}
                    value={value}
                    placeholder="Ask about my work, stack, or availability…"
                    aria-label="Message"
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter' && !event.shiftKey) {
                            event.preventDefault()
                            submit()
                        }
                    }}
                />
                <button
                    type="submit"
                    className={styles.send}
                    disabled={disabled || value.trim().length === 0}
                    aria-label="Send message"
                >
                    <ArrowUp size={16} />
                </button>
            </form>
            <p className={styles.hint}>
                Enter to send · Shift + Enter for a new line · scripted demo, answers come from this portfolio
            </p>
        </div>
    )
}
