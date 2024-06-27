import Layout from '@/components/layout/Layout'
import DashboardPage from '@/components/templates/DashboardPage/DashboardPage'
import OrderPage from '@/components/templates/OrderPage/OrderPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Head from 'next/head'

function Order() {
  const { shouldLoadContent } = useRedirectByUserCheck()

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
