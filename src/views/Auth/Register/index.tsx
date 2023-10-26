import Link from 'next/link'
import React, { useState } from 'react'
import styles from './Register.module.css'
import { useRouter } from 'next/router';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import PopUp from '@/components/fragments/popup'
const RegisterView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {push} = useRouter();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownConfirmPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
      
        const email = event.target.email.value;
        const userName = event.target.userName.value;
        const userPassword = event.target.userPassword.value;
        const userConfirmPassword = event.target.userConfirmPassword.value;
      
        if (!email || !userName || !userPassword || !userConfirmPassword) {
          setError('Please fill all fields.');
          setIsLoading(false);
          return;
        }
        if (userPassword !== userConfirmPassword) {
            setError("Your password and confirm password don't match.");
            setIsLoading(false);
            return;
          }
        const data={
            email:email,
            userName:userName,
            userPassword:userPassword,
            userConfirmPassword:userConfirmPassword,

        };
        const result = await fetch('../api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        

            if(result.status === 200){
                event.target.reset();
                setPopUpTitle("Successfully registered");
                setPopUpMessage("Welcome "+userName+ "!");
                setShowRegisterFinishPopup(true);
            }else{
                console.log(result);
                setIsLoading(false);
                setError(result.status===400 ? "Email already exists" : "");
            }
    }

    //register popup usestate
    const [showRegisterFinishPopup, setShowRegisterFinishPopup] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpTitle, setPopUpTitle] = useState("");
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
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder='Confirm your password'
                            name="userConfirmPassword"
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownConfirmPassword}
                                >
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
            <PopUp isVisible = {showRegisterFinishPopup} 
            onClose={() => {setIsLoading(false);push('/auth/login');}} 
            message={popUpMessage}
            messageTitle={popUpTitle}/>
            </main>
        </div>
    )
}

export default RegisterView