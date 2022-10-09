// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string,
//   image: string,
//   description: string,
//   archive: string,
//   author: string,
//   attributes: [
//     {
//       reward: number,
//       price: string
//     }
//   ]
// }

export default function handler(
    // req: NextApiRequest,
    // res: NextApiResponse<Data>
    req,
    res
  ) {
    res.status(200).json({
      name: 'name',
      image: "https://www.computerhope.com/jargon/b/black.jpg",
      description: 'description',
      archive: 'archive',
      author: 'author',
      reward: 1,
      price: "Free"
    })
  }