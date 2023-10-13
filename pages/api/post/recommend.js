import { connectDB } from "@/util/database";

export default async function handler(req,res){
   
    if(req.method == 'POST'){
        const category = req.body.category
        const cuision = req.body.cuision
        const occasion = req.body.occasion

        const db = (await connectDB).db('forum');
        
        let result = await db.collection('choose').findOne({category: category},{cuision : cuision},{occasion: occasion})
        
        if (result){
            res.status(200).json({ menu: result.menu });
        }
        } 
    }
