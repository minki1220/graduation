import Link from 'next/link';
import styles from './signup.module.css';

export default function Register() {
  return (
   
    <div className={styles.signup_container}>
      <h1>Create An Account!</h1>
      <div className={styles.sign_in_container}>
        <form method="POST" action="/api/auth/signup" >
          <input  name="name" type="text" placeholder="Name" /> 
          <input  name="email" type="text" placeholder="Email" />
          <input  name="password" type="password" placeholder="Password" />
          <Link href="/api/auth/signin"><button type="submit">SIGN UP</button></Link>
        </form>
      </div>
    </div>
    
  )
}
