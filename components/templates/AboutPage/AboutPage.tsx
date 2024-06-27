import { $mode } from '@/context/mode'
import { useStore } from 'effector-react'
import styles from '@/styles/about/index.module.scss'

const AboutPage = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={styles.about__title}></h2>
      </div>
    </section>
  )
}

export default AboutPage
