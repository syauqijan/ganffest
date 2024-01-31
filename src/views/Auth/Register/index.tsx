import React, { useState, useEffect } from 'react'
import styles from './Register.module.css'
import { useRouter } from 'next/router';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import PopUp from '@/components/fragments/popup'
import axios from 'axios';
import Link  from 'next/link';
import { useNavigate } from 'react-router-dom';
import next from 'next';

const RegisterView = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const {push} = useRouter();
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
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
        if(!email || !name || !password || !event.target.userConfirmPassword.value){
            setError('Please fill all fields.');
            setIsLoading(false);
            return;
        }
        if(password !== event.target.userConfirmPassword.value){
            setError("Your password and confirm password don't match.");
            setIsLoading(false);
            return;
        }

        try{
            await axios.post('http://localhost:3000/users', {
                email: email,
                name: name,
                password: password,
            });
            setIsLoading(false);
            setPopUpTitle("Successfully registered");
            setPopUpMessage("Welcome "+name+ "!");
            setShowRegisterFinishPopup(true);
            // navigate('/auth/login');
        }catch(error){
            setIsLoading(false);
            console.log(error);

        }

        // if (!email || !userName || !userPassword || !userConfirmPassword) {
        //     setError('Please fill all fields.');
        //     setIsLoading(false);
        //     return;
        // }
        // if (userPassword !== userConfirmPassword) {
        //     setError("Your password and confirm password don't match.");
        //     setIsLoading(false);
        //     return;
        // }
        // const data={
        //     email:email,
        //     name:userName,
        //     password:userPassword,
            
        // };
        // const result = await fetch('../api/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // });
        

        //     if(result.status === 200){
        //         event.target.reset();
        //         setPopUpTitle("Successfully registered");
        //         setPopUpMessage("Welcome "+userName+ "!");
        //         setShowRegisterFinishPopup(true);
        //     }else{
        //         setIsLoading(false);
        //         setError(result.status===400 ? "Email already exists" : "");
        //     }
    }

    //register popup usestate
    const [showRegisterFinishPopup, setShowRegisterFinishPopup] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");
    const [popUpTitle, setPopUpTitle] = useState("");
    return (
        <div id="tsparticles">
            <main className={styles.box}>
            <h2>REGISTER</h2>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.registerForm} onSubmit={handleSubmit} method="POST">
                <div className={styles.inputBox}>
                    <TextField sx={{ width: '26ch', marginBottom:'15px' }} id="email" label="Email" placeholder="Type your email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={styles.inputBox}>
                    <TextField sx={{ width: '26ch', marginBottom:'15px' }} id="userName" label="Username" placeholder="Type your username" variant="standard" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className={styles.inputBox}>
                    <FormControl sx={{ width: '26ch', marginBottom:'15px'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="userPassword"
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Type your password'
                            name="userPassword"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                    <FormControl sx={{ width: '26ch', marginBottom:'15px'}} variant="standard">
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
                    {isLoading ? "Loading..." : "Sign Up"}
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