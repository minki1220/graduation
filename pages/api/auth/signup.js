import { connectDB } from "@/util/database"
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const password = req.body.password;
      const confirmPassword = req.body.confirmPassword;
  
      if (password !== confirmPassword) { 
    // 비밀번호와 비밀번호 확인이 일치하지 않을 때 클라이언트에게 알림 표시
      const errorMessage = '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
      return res.status(400).json({ message: errorMessage });
      }
  
      const hash = await bcrypt.hash(password, 10);
      req.body.password = hash;
  
      const confirmHash = await bcrypt.hash(confirmPassword, 10);
      req.body.confirmPassword = await bcrypt.hash(confirmPassword,10);

      let db = (await connectDB).db('forum');
      await db.collection('user_cred').insertOne(req.body);
      res.redirect(302, '/');
    }
  }
  
  
  
  
  
  
  