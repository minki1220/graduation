import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const tags = req.body.tagsItems;
    const db = (await connectDB).db("forum")
    let result = await db.collection('user_cred').insertOne(req.body)
}}
