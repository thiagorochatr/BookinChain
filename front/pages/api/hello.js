export default function handler(
    req,
    res
  ) {
    res.status(200).json({
      name: 'Don Quijote',
      image: "https://gateway.pinata.cloud/ipfs/QmRkXdHgfiG2EXroymqM2w3CScdAxkCZVdo9As661zvXHr",
      description: 'This NFT is the book of Dom Quijote',
      archive: 'https://gateway.pinata.cloud/ipfs/QmNWzCBdFRjxKUS5P2BnC3YHZ6zXm1cPZw8gJnVetp68YW',
      author: 'john.eth',
      reward: 7.7,
      price: "Free"
    })
  }