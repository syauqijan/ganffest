// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import nc from 'next-connect';
import { createSubmissionData, signUp } from '@/utils/db/service';

type Data = {
  status: boolean
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.method === 'POST'){
    console.log(req.body)
    await createSubmissionData(req.body, ({status, message}:{status: boolean, message: string}) => {
      console.log(req.body)
        if(status){
          console.log('berhasil')
            res.status(200).json({status, message});
        }else{
          console.log('gagal')
            res.status(400).json({status, message});
        }
    })
  }else{
    res.status(405).json({status: false, message: "Method not allowedd"})
  }
}

// const handler = nc<NextApiRequest, NextApiResponse<Data>>();

// handler.post(async (req, res) => {
//   try {
//     const { body } = req;
//     const result = await signUp(body);

//     if (result.status) {
//       res.status(200).json({ status: true, message: result.message });
//     } else {
//       res.status(400).json({ status: false, message: result.message });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ status: false, message: 'Internal Server Error' });
//   }
// });

// export default handler;
