import * as React from 'react';
import IAButton from "../components/IAButton";
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    function handlenavigatesignup() {
        navigate('/signup');
    }

    function handlenavigatelogin() {
        navigate('/login');
    }

    return (
        <div className='container'>
            <div className='text-container'>
                <div>
             <Typography variant='h1' style={{ marginBottom: '20px' }}> 🩸 Blood Bank Application</Typography>
                </div>
                <div className='text-center m-2 p-2'>
                <IAButton
                    variant="contained"
                    color='error'
                    onClick={handlenavigatesignup}
                    sx={{ marginRight: '20px' }}
                >
                    Signup
                </IAButton>
                <IAButton
                    variant="contained"
                    color="error"
                    onClick={handlenavigatelogin}
                >
                    Login
                </IAButton>
                </div>
            </div>
        </div>
    );
}
