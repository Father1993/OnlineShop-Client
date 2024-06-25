import { createEffect } from 'effector-next'
import api from '../axiosClient'
import { IAddToCartFx } from '@/types/shoppingCart'

export const getCartItemsFx = createEffect(async (url: string) => {
  const { data } = await api.get(url)
  return data
})

export const addToCartFx = createEffect(
  async ({ url, username, partId }: IAddToCartFx) => {
    const { data } = await api.post(url, { username, partId })

    return data
  }
)
