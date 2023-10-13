import { connectDB } from "@/util/database.js"
import MenuSelector from "./userpage";

export default async function List() {
   
  return (
    <div >
      <MenuSelector/>
    </div>
  )
}