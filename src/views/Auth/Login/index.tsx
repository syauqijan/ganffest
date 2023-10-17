import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Login.module.css'
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {push, query} = useRouter();
    const [error, setError] = useState('');
    const callbackUrl : any = query.callbackUrl || "/";
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
        try{
            const res = await signIn('credentials', {
                redirect:false,
                email:event.target.email.value,
                password:event.target.userPassword.value
            });
            if(!res?.error){
                event.target.reset();
                setIsLoading(false);
                push(callbackUrl);
            }else{
                setIsLoading(false);
                setError(res.error);
            }
        }catch(error: any){
            console.log(error);
            setIsLoading(false);
            setError(error);
        }
    }
    return (
        <div id="tsparticles">
            <main className={styles.box}>
            <h2>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit} method="POST">
            <div className={styles.inputBox}>
                    <label >Email</label>
                    <input type="email" name="email" id="email" placeholder="type your email" required/>
                </div>
                
                <div className={styles.inputBox}>
                    <label >Password</label>
                    <input type="password" name="userPassword" id="userPassword" placeholder="type your password"
                        required/>
                </div>
                
                <button type="submit" name="" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                </button>
                <p className={styles.loginText}>
                    Don{"'"}t have an account? Sign up  <Link href="/auth/register">here</Link>
                </p>
            </form>
            </main>
        </div>
    )
}

export default LoginView