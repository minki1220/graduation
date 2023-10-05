
import { connectDB } from "@/util/database";
import Check from "./Check";


export default async function List(){
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    return(
        <div className="tag-container">
            <Check/>
        </div>
    )
}