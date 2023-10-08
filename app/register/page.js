'use client'

import Link from 'next/link';
import styles from '../css/signup.module.css';

export default function SignUpPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // 비밀번호와 비밀번호 재확인 필드의 값 확인
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
    
        if (password !== confirmPassword) {
          alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");
          return;
        }
    
        // 비밀번호가 일치할 때 여기에 처리 로직을 추가하세요.
    
        // API 호출 또는 다른 작업 수행
      };
  return (
    <div className={styles.container_box}>
    <div className={styles.signup_container}>
      <h1 className={styles.headerStyle}>Create An Account!</h1>
      <div className={styles.sign_in_container}>
        <form method="POST" action="/api/auth/signup" >
          <input  name="name" type="text" placeholder="Name" /> 
          <input  name="email" type="text" placeholder="Email" />
          <input  name="password" type="password" placeholder="Password" />
          <input name="confirmPassword" type="password" placeholder="Confirm Password"/>
          <Link href="/api/auth/signin"><button type="submit">SIGN UP</button></Link>
        </form>
      </div>
    </div>
    </div>
    
  )
}
