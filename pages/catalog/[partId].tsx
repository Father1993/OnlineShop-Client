import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStore } from 'effector-react'
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import { IQueryParams } from '@/types/catalog'
import { $boilerPart, setBoilerPart } from '@/context/boilerPart'
import { getBoilerPartFx } from '@/app/api/boilerParts'
import { toast } from 'react-toastify'
import PartPage from '@/components/templates/PartPage/PartPage'
import Custom404 from '../404'

function CatalogPartPage({ query }: { query: IQueryParams }) {
  const { shouldLoadContent } = useRedirectByUserCheck()
  const boilerPart = useStore($boilerPart)
  const [error, setError] = useState(false)
  const router = useRouter()

  useEffect(() => {
    loadBoilerPart()
  }, [router.asPath])

  const loadBoilerPart = async () => {
    try {
      const data = await getBoilerPartFx(`/boiler-parts/find/${query.partId}`)

      if (!data) {
        setError(true)
        return
      }

      setBoilerPart(data)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  return (
    <>
      <Head>
        <title>CarAudio | {shouldLoadContent ? boilerPart.name : ''}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE-edge" />
        <meta name="viewport" content="width-device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />
      </Head>
      {error ? (
        <Custom404 />
      ) : (
        shouldLoadContent && (
          <Layout>
            <main>
              <PartPage />
              <div className="overlay" />
            </main>
          </Layout>
        )
      )}
    </>
  )
}

export async function getServerSideProps(context: { query: IQueryParams }) {
  return {
    props: { query: { ...context.query } },
  }
}

export default CatalogPartPage
