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
    const handleGoogleSignIn = async () => {
        const res = await signIn('google', { callbackUrl });
        
        if (!res?.error) {
            // Redirect to the homepage after successful Google sign-in
            push(callbackUrl);
        } else {
            setError(res.error);
        }
    };
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
            <form className={styles.loginForm} onSubmit={handleSubmit} method="POST">
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
                    {isLoading ? "Loading..." : "Sign In"}
                </button>
                <p className={styles.loginText}>
                    Don{"'"}t have an account? <Link className={styles.registerLink} href="/auth/register">Sign up here</Link>
                </p>
            </form>

                <div className={styles.orContainer}>
                    <div className={styles.dividerLine}></div>
                    <p className={styles.orText}>or</p>
                    <div className={styles.dividerLine}></div>
                </div>



            <button className={styles.google} onClick={handleGoogleSignIn}>
                <img src="/google.png" alt="google" className={styles.googleIcon} />
                <p className={styles.googleText}>Sign in with google</p>
                </button>
            </main>
        </div>
    )
}

export default LoginView