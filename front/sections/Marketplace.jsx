import { useEffect, useState } from 'react';
import { safeMint2, transfer } from '../pages/api/index';
import { ConnectButton, useConnectModal, useAccount } from '@web3modal/react'

export default function UseAccount() {

  const [object, setObject] = useState({});
  const { address, connector, isConnected } = useAccount()

  const name = object.name;
  const image = object.image;
  const author = object.author;
  const reward = object.reward;
  const price = object.price;

  useEffect(() => {
    fetch("/api/hello")
    .then(response => response.json())
    .then(object => setObject(object))

  }, []);

  return (
      <div className='border w-64 rounded-xl pb-2'>
        <img src={image} alt="book image" 
          className='pb-2 rounded-t-xl'
        />
        <div>
          <p className='font-bold'>{name}</p>
          <div className='flex gap-[50%] px-8 items-center justify-center'>
            <div className='flex flex-col'>
              <a href='#'>
                <p className='underline'>
                  {author}
                </p>
              </a>
              <p className='font-semibold text-md'>
                Reward: $BIN {reward}
              </p>
            </div>
            <button onClick={() => safeMint2(address)}>
              <p className='bg-purple-500 py-1 px-2 rounded-md'>
                {price}
              </p>
            </button>
          </div>
        </div>
      </div>
  )
}