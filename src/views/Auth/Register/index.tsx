import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Register.module.css'
import { useRouter } from 'next/router';
const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {push} = useRouter();
    const [error, setError] = useState('');
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
        const data={
            email:event.target.email.value,
            userName:event.target.userName.value,
            userPassword:event.target.userPassword.value,
            userConfirmPassword:event.target.userConfirmPassword.value
        };
        console.log(data);
        const result = await fetch('../api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        

            if(result.status === 200){
                event.target.reset();
                setIsLoading(false);
                push('/auth/login');
            }else{
                console.log(result);
                setIsLoading(false);
                setError(result.status===400 ? "Email already exists" : "");
            }
    }
    return (
        <div id="tsparticles">
            <main className={styles.box}>
            <h2>Register</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit} method="POST">
            <div className={styles.inputBox}>
                    <label >Email</label>
                    <input type="email" name="email" id="email" placeholder="type your email" required/>
                </div>
                <div className={styles.inputBox}>
                    <label >Username</label>
                    <input type="text" name="userName" id="userName" placeholder="type your username" required/>
                </div>
                <div className={styles.inputBox}>
                    <label >Password</label>
                    <input type="password" name="userPassword" id="userPassword" placeholder="type your password"
                        required/>
                </div>
                <div className={styles.inputBox}>
                    <label>Confirm Password</label>
                    <input type="password" name="userConfirmPassword" id="userConfirmPassword" placeholder="confirm your password"
                        required/>
                </div>
                <button type="submit" name="" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Register"}
                </button>
                <p className={styles.registerText}>
                    have an account? <Link className={styles.loginLink} href="/auth/login">Login</Link>
                </p>
            </form>
            </main>
        </div>
    )
}

export default RegisterView