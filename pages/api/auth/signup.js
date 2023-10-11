import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  // 상태확인
  if (req.method === "POST") {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const email = req.body.email;
    const tags = [];

    let db = (await connectDB).db("forum");
    const existingUser = await db.collection("user_cred").findOne({ email });

    if (existingUser) {
      // 동일한 이메일 주소가 이미 존재하는 경우 오류 메시지를 반환합니다.
      const errorMessage = "이미 사용 중인 이메일 주소입니다.";
      return res.status(400).json({ message: errorMessage });
    }

    if (password !== confirmPassword) {
      // 비밀번호와 비밀번호 확인이 일치하지 않을 때 클라이언트에게 알림 표시
      const errorMessage = "비밀번호와 비밀번호 확인이 일치하지 않습니다.";
      return res.status(400).json({ message: errorMessage });
    }

    const hash = await bcrypt.hash(password, 10);
    req.body.password = hash;

    const confirmPasswordhash = await bcrypt.hash(confirmPassword, 10);
    req.body.confirmPassword = hash;

    //____________________________________________

    // 새로운 필드 추가
    const newData = {
      ...req.body,
      tags: [],
    };

    // db업로드
    db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(newData);
    res.redirect(302, "/tags");
  }
}