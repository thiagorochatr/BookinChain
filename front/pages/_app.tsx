import '../styles/globals.css'
import type { AppProps } from 'next/app'

import type { ConfigOptions } from '@web3modal/react'
import { Web3Modal } from '@web3modal/react'

import { chains, providers } from '@web3modal/ethereum'

import Home from '.'

const config: ConfigOptions = {
  projectId: 'ca8b0fcf475ac8ab6d223f29597b145d',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal',
    autoConnect: true,
    chains: [
      chains.polygon
    ],
    providers: [providers.walletConnectProvider({ projectId: 'ca8b0fcf475ac8ab6d223f29597b145d' })]
  }  
}  

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Home />
      <Web3Modal config={config} />
    </>
  )
}

export default MyApp