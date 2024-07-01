import { $mode } from '@/context/mode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useStore } from 'effector-react'
import FeedbackForm from '@/components/modules/FeedbackForm/FeedbackForm'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import styles from '@/styles/contacts/index.module.scss'

const ContactsPage = ({ isWholesaleBuyersPage = false }) => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const isMobile560 = useMediaQuery(560)

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2 className={`${styles.contacts__title} ${darkModeClass}`}>
          {isWholesaleBuyersPage ? 'Оптовым покупателям' : 'Контакты'}
        </h2>
      </div>

      <div className={styles.contacts__inner}>
        {isWholesaleBuyersPage ? (
          <div className={`${styles.contacts__list} ${darkModeClass}`}>
            <p>
              <span>
                Условия оптовых заказов решаются индивидуально по телефону:{' '}
              </span>
              <span>+7 (914) 150-08-52</span>
            </p>
            <p>
              Либо опишите суть заказа в форме обратной связи и мы с вами
              свяжемся.
            </p>
          </div>
        ) : (
          <ul className={`${styles.contacts__list} ${darkModeClass}`}>
            <li className={styles.contacts__list__title}>
              <h3 className={darkModeClass}>
                Магазин аудиотехники для автомобилей всех марок
              </h3>
            </li>
            <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
              <span>Офис:</span>
              <span> г. Хабаровск , ул. Индустриальная, д. 1а.</span>
            </li>
            <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
              <span>Склад:</span>
              <span> г. Хабаровск , ул. Индустриальная, д. 1а.</span>
            </li>
            <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
              <span>График работы офиса:</span>
              <span> пн-пс: с 9:00 до 18:00</span>
            </li>
            <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
              <span>Наш контактный телефон:</span>
              <span> +7(914) 150-08-52</span>
            </li>
            <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
              <span>Время приемок заявок:</span>
              <span> Пн-Вс: с 9:00 до 20:00</span>
            </li>
            <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
              <span>Прием заказов электронным способом на сайте:</span>
              <span>круглосуточно</span>
            </li>
            <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
              <span>E-mail:</span>
              <span className={styles.contacts__list__item__mail}>
                {!isMobile560 && <MailSvg />} <span>info@audioshop.ru</span>
              </span>
            </li>
          </ul>
        )}
        <FeedbackForm />
      </div>
    </section>
  )
}

export default ContactsPage
