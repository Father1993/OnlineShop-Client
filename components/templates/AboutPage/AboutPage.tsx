import { $mode } from '@/context/mode'
import { useStore } from 'effector-react'
import styles from '@/styles/about/index.module.scss'

const AboutPage = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={`${styles.about__title} ${darkModeClass}`}>
          О компании
        </h2>
        <div className={styles.about__inner}>
          <div className={`${styles.about__info} ${darkModeClass}`}>
            <p>
              Компания &quot;AudioSH0P&quot; предлагает Вам аудиотехнику для
              японских, европейских, корейских и отечественных автомобилей. 99%
              запчастей техники на сайте постоянно поддерживаются в наличии на
              нашем складе в городе Хабаровск.
            </p>
            <p>
              Ассортимент интернет-магазина &quot;AudioSH0P&quot; включает в
              себя аудиотехнику для автомобилей следующих фирм: Carrozzeria,
              Kenwood, Pioneer, ACV, Sony, Panasonic, Toyota, Honda, Subaru,
              Suzuki, Mazda, BMW, Nissan, MMC, Mercedes-Benz, Daihatsu.
            </p>
          </div>
          <div className={`${styles.about__img} ${styles.about__img__top}`}>
            <img src="/img/about-img.png" alt="image-1" />
          </div>
          <div className={`${styles.about__img} ${styles.about__img__bottom}`}>
            <img src="/img/about-img-2.png" alt="image-2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
