
import { connectDB } from "@/util/database"

export default async function Home() {
  // const db = (await connectDB).db('forum');
  // let result = await db.collection('post').find().toArray();
  // console.log(result);
  return (
    <div>
      <div>
        <nav>
          <p>카페 지도</p>
          <p>카페 소식</p>
          <p>#</p>
          <p>#</p>
        </nav>
      </div>
    </div>
  )
}
