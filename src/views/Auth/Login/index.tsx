import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Login.module.css'
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { FormControl, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { VisibilityOff } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import { Visibility } from '@mui/icons-material';
import Image from 'next/image';

const LoginView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {push, query} = useRouter();
    const [error, setError] = useState('');
    const callbackUrl : any = query.callbackUrl || "/";
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleGoogleSignIn = async () => {
        const res = await signIn('google', { callbackUrl });
        
        // if (!res?.error) {
        //     // Redirect to the homepage after successful Google sign-in
        //     push(callbackUrl);
        // } else {
        //     setError(res.error);
        // }
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError(''); 

        const email = event.target.email.value;
        const password = event.target.userPassword.value;

        if (!email || !password) {
            setError('Please fill all this field');
            return; 
        }

        setIsLoading(true);

        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password
            });

            if (!res?.error) {
                event.target.reset();
                setIsLoading(false);
                push('/');
            } else {
                setIsLoading(false);
                setError('Your email or password is not valid');
            }
        } catch (error: any) {
            console.log(error);
            setIsLoading(false);
            setError('Your email or password is not valid'); 
        }
    }
    return (
        <div id="tsparticles">
            <main className={styles.box}>
            <h2>LOGIN</h2>
            {/* <div className={styles.logo}>
                <img src="/logonavbar.svg" alt="Logo" className={styles.logo} />
                
            </div> */}
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.loginForm} onSubmit={handleSubmit} method="POST">
                <div className={styles.inputBox}>
                    <TextField sx={{ width: '26ch', marginBottom:'15px' }} id="email" label="Email" placeholder="Type your email" variant="standard" />
                </div>
                
                <div className={styles.inputBox}>
                        <FormControl sx={{ width: '26ch', marginBottom:'15px'}} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="userPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Type your password'
                        name="userPassword"
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            className={styles.iconButton}
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                    </FormControl>
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
                <Image src="/google.png" alt="google" className={styles.googleIcon} />
                <p className={styles.googleText}>Sign in with google</p>
                </button>
            </main>
        </div>
    )
}

export default LoginView