import Head from 'next/head'
import { useCallback } from 'react'
import Layout from '@/components/layout/Layout'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import OrderPage from '@/components/templates/OrderPage/OrderPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'

function Order() {
  const { shouldLoadContent } = useRedirectByUserCheck()

  const getDefaultTextGenerator = useCallback(() => 'Оформление заказа', [])
  const getTextGenerator = useCallback((param: string) => ({})[param], [])

  return (
    <>
      <Head>
        <title>
          Shop Title | {shouldLoadContent ? 'Оформление заказа' : ''}
        </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />
      </Head>

      {shouldLoadContent && (
        <Layout>
          <Breadcrumbs
            getDefaultTextGenerator={getDefaultTextGenerator}
            getTextGenerator={getTextGenerator}
          />
          <main>
            <OrderPage />
            <div className="overlay" />
          </main>
        </Layout>
      )}
    </>
  )
}

export default Order
