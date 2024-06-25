import FooterLogo from './FooterLogo'
import OnlineStoreContent from './OnlineStoreContent'
import Link from 'next/link'
import CompanyContent from './CompanyContent'
import MarkerSvg from '@/components/elements/MarkerSvg/MarkerSvg'
import PhoneSvg from '@/components/elements/PhoneSvg/PhoneSvg'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/footer/index.module.scss'
import Accordion from '@/components/elements/Accordion/Accordion'

const Footer = () => {
  const isMedia750 = useMediaQuery(750)
  const isMedia500 = useMediaQuery(500)

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          {!isMedia750 && <FooterLogo />}
          <div className={styles.footer__top__inner}>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>
                    Интернет-магазин
                  </h3>
                  <OnlineStoreContent />
                </>
              )}

              {isMedia500 && (
                <Accordion
                  title="Интернет-магазин"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <OnlineStoreContent />
                  <div style={{ height: 17 }}></div>
                </Accordion>
              )}
            </div>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>Компания</h3>
                  <CompanyContent />
                </>
              )}

              {isMedia500 && (
                <Accordion
                  title="Компания"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <CompanyContent />
                  <div style={{ height: 17 }}></div>
                </Accordion>
              )}
            </div>
          </div>
          <div className={styles.footer__top__item}>
            <h3 className={styles.footer__top__item__title}>Контакты</h3>
            <ul
              className={`${styles.footer__top__item__list} ${styles.footer__top__item__contacts}`}
            >
              <li className={styles.footer__top__item__list__item}>
                <Link href="/contacts" passHref legacyBehavior>
                  <a className={styles.footer__top__item__list__item__link}>
                    <span>Адрес:</span>
                    <span>г. Хабаровск, ул. Индустриальная 1Б, место 105</span>
                    <span>
                      <MarkerSvg />
                    </span>
                  </a>
                </Link>
              </li>
              <li className={styles.footer__top__item__list__item}>
                <a
                  href="tel:+79141500852"
                  className={styles.footer__top__item__list__item__link}
                >
                  <span>Наш контактный телефон:</span>
                  <span>+7 (914) 150-08-52</span>
                  <span>
                    <PhoneSvg />
                  </span>
                </a>
              </li>
              <li className={styles.footer__top__item__list__item}>
                <a
                  href="mailto:caraudio-khv@mail.ru"
                  className={styles.footer__top__item__list__item__link}
                >
                  <span>E-mail:</span>
                  <span>CarAudio-khv@mail.ru</span>
                  <span>
                    <MailSvg />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__block}>
            <div className={styles.footer__bottom__block__left}>
              <h3 className={styles.footer__bottom__block__title}>
                Мы принимаем к оплате:
              </h3>
              <ul className={styles.footer__bottom__block__pay}>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/pay.png" alt="apple-pay" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/gpay.png" alt="google-pay" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/master-card.png" alt="master-card-pay" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/visa.png" alt="visa-pay" />
                </li>
              </ul>
            </div>
            <div className={styles.footer__bottom__block__right}>
              <h3 className={styles.footer__bottom__block__title}>
                Мы в соцсети:
              </h3>
              <ul className={styles.footer__bottom__block__social}>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_vk}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_fb}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_inst}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_ytb}
                  />
                </li>
              </ul>
            </div>
          </div>
          {isMedia750 && <FooterLogo />}
          <div className={styles.footer__bottom__block}>
            <p className={styles.footer__bottom__block__copyright}>
              &#9400; «Музыка для твоего авто» 2024.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
