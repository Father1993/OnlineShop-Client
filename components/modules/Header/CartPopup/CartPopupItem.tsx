import { $mode } from '@/context/mode'
import { IShoppingCartItem } from '@/types/shoppingCart'
import { useStore } from 'effector-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DeleteSvg from '@/components/elements/DeleteSvg/DeleteSvg'
import { formatPrice } from '@/utils/common'
import { removeItemFromCart, updateTotalPrice } from '@/utils/shopping_cart'
import CartItemCounter from '@/components/elements/CartItemCounter/CartItemCounter'
import styles from '@/styles/cartPopup/index.module.scss'
import spinnerStyles from '@/styles/spinner/index.module.scss'

const CartPopupItem = ({ item }: { item: IShoppingCartItem }) => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const spinnerDarkModeClass =
    mode === 'dark' ? '' : `${spinnerStyles.dark_mode}`

  const [spinner, setSpinner] = useState(false)
  const [price, setPrice] = useState(item.price)

  useEffect(() => {
    setPrice(price * item.count)
  }, [])
  console.log(price, item.count)

  useEffect(() => {
    updateTotalPrice(price, item.partId)
  }, [price])

  const increasePrice = () => setPrice(price + item.price)
  const decreasePrice = () => setPrice(price - item.price)

  const deleteCartItem = () => removeItemFromCart(item.partId, setSpinner)

  return (
    <li className={styles.cart__popup__list__item}>
      <div className={styles.cart__popup__list__item__top}>
        <div className={styles.cart__popup__list__item__img}>
          <img src={item.image} alt={item.name} />
        </div>
        <Link href={`/catalog/${item.partId}`} passHref legacyBehavior>
          <a
            className={`${styles.cart__popup__list__item__text} ${darkModeClass}`}
          >
            <span>
              {item.name.replace('.', '')}, {item.parts_manufacturer},{' '}
              {item.boiler_manufacturer}
            </span>
          </a>
        </Link>
        <button onClick={deleteCartItem}>
          <span>
            {spinner ? (
              <span
                className={`${spinnerStyles.spinner} ${spinnerDarkModeClass}`}
                style={{ top: 0, left: 0, width: 20, height: 20 }}
              />
            ) : (
              <DeleteSvg />
            )}
          </span>
        </button>
      </div>
      <div className={styles.cart__popup__list__item__bottom}>
        {item.in_stock === 0 ? (
          <span className={styles.cart__popup__list__item__empty}>
            Нет на складе
          </span>
        ) : (
          <CartItemCounter
            totalCount={item.in_stock}
            partId={item.partId}
            initialCount={item.count}
            increasePrice={increasePrice}
            decreasePrice={decreasePrice}
          />
        )}
        <span
          className={`${styles.cart__popup__list__item__price} ${darkModeClass}`}
        >
          {formatPrice(price)} P
        </span>
      </div>
    </li>
  )
}

export default CartPopupItem
