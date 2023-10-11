
import Link from 'next/link';
import styles from '@/css/signup.module.css';

export default function SignUpPage() {
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
          <button type="submit">SIGN UP</button>
          
        </form>
      </div>
    </div>
    </div>
    
  )
}
