import '@/styles/globals.css'
import {NextPage} from 'next'
import {Component, ReactElement, ReactNode} from 'react'
import {AppProps} from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({Component, pageProps}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? (page => page)

    return getLayout(<Component {...pageProps}/>)
}