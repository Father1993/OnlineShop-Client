import { IShoppingCartItem } from '@/types/shoppingCart'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { usePrice } from '@/hooks/usePrice'
import styles from '@/styles/order/index.module.scss'
import Link from 'next/link'

const OrderItem = ({ item }: { item: IShoppingCartItem }) => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const { price, spinner, decreasePrice, deleteCartItem, increasePrice } =
    usePrice(item.count, item.partId, item.price)

  return (
    <li className={styles.order__cart__list__item}>
      <div className={styles.order__cart__list__item__left}>
        <div className={styles.order__cart__list__item__left__inner}>
          <div className={styles.order__cart__list__item__img}>
            <img src={item.image} alt={item.name} />
          </div>
          <Link href={`/catalog/${item.partId}`} passHref legacyBehavior>
            <a></a>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default OrderItem
