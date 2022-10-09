import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { confirmation } from './api'

import { ConnectButton, useConnectModal, useAccount } from '@web3modal/react'
import UseDisconnect from '../sections/UseDisconnect'
import Marketplace from '../sections/Marketplace'
import Book from '../sections/Book'
import { useEffect } from 'react'



const Home: NextPage = () => {
  const { isOpen, open, close } = useConnectModal()
  const { address, connector, isConnected } = useAccount()

  return isConnected ? (
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Create Next App 1</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className='flex justify-center items-center gap-28 my-4 mx-4'>
          <h1 className="text-5xl font-bold">
            BookinChain
          </h1>

          <div className='flex flex-col items-center'>
            <span
              className="text-md px-4 pt-2 text-black"
            >{`0x${address[2]}${address[3]}${address[4]}...${address.slice(-4)}`}
            </span>
            <UseDisconnect />
          </div>

        </header>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
            <Marketplace />
        </main>

        <footer className="flex h-24 w-full items-center justify-center border-t">
          <a
            className="flex items-center justify-center gap-2"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </a>
        </footer>
      </div>
  ) : (

    <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>BookinChain</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-6xl font-bold">
        BookinChain
      </h1>

      <div className='my-8 flex items-center justify-center gap-4'>
        <p>Entrar no App: </p>
        <ConnectButton />
      </div>
    </main>

    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </a>
    </footer>
  </div>

  )

}

export default Home