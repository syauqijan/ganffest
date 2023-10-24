import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Register.module.css'
import { useRouter } from 'next/router';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {push} = useRouter();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
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
            <form className={styles.registerForm} onSubmit={handleSubmit} method="POST">
                <div className={styles.inputBox}>
                    <TextField sx={{ width: '29ch', marginBottom:'15px' }} id="email" label="Email" placeholder="Type your email" variant="standard" />
                </div>
                <div className={styles.inputBox}>
                    <TextField sx={{ width: '29ch', marginBottom:'15px' }} id="userName" label="Username" placeholder="Type your username" variant="standard" />
                </div>
                <div className={styles.inputBox}>
                    <FormControl sx={{ width: '29ch', marginBottom:'15px'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="userPassword"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Type your password'
                            name="userPassword"
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
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
                <div className={styles.inputBox}>
                    <FormControl sx={{ width: '29ch', marginBottom:'15px'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                        <Input
                            id="userConfirmPassword"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Confirm your password'
                            name="userConfirmPassword"
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
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
                    {isLoading ? "Loading..." : "Register"}
                </button>
                <p className={styles.registerText}>
                    Have an account? <Link className={styles.loginLink} href="/auth/login">Login</Link>
                </p>
            </form>
            </main>
        </div>
    )
}

export default RegisterView