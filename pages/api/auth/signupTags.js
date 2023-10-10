import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req,res,authOptions)
  if(session){
    req.body.email = session.user.email
    req.body.name = session.user.name
  }
  console.log(session)

  if (req.method == 'POST'){
    const db = (await connectDB).db('forum')
    let result = await db.collection('tags').insertOne(req.body)
    res.status(200).json('응답완료')
  }
}
