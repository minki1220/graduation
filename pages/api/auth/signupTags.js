import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./[...nextauth]";

export default async function handler(req, res) {
  let session = await getServerSession(req, res, authOptions)
  console.log(session)
  if (req.method == 'POST'){
    console.log(req.body._id)
    let insertTags = {
      tags : req.body.tags
    }
    const db = (await connectDB).db('forum')
    let result = await db.collection('user_cred').updateOne(
      {email : session.user.email},
      {$set : {insertTags}}
    )
    res.redirect(302, "/");
  }
}
