import { personalInfo } from '@/lib/data'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>© {year} {personalInfo.name}</div>
      <div className={styles.status}>
        <span className={styles.pulse} />
        open to opportunities
      </div>
    </footer>
  )
}