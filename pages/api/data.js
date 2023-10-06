
// export default function handler(req, res){
//     const selectedItems = req.body.selectedItems;
//     console.log('선택된 항목:',selectedItems);
//     res.json({ message: '데이터 처리가 완료되었습니다.' });
//   }

import { connectDB } from "@/util/database";

export default async function handler(req, res){
  if(req.method == 'POST'){
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').insertOne(req.body)
    setIsChecked({});
  }
}