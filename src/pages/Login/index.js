import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email,password);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://127.0.0.1:8000/api/login',{
            email: email,
            password: password,
        });
        localStorage.setItem('user', JSON.stringify(res.data.user.username));
        if(res.data.user.auth === 'user'){
            window.location.href = '/';
        }else{
            window.location.href = '/admin';
        }
    };
    return (
        <form onSubmit={handleSubmit}>
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ width: '100%', minHeight: '600px' }}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'space-between'}
                sx={{
                    width: '50%',
                    height: '500px',
                    padding: '50px',
                    borderRadius: '10px',
                    border: '1px solid #ccc',
                }}
            >
                    <Typography variant="h2" color="#ffbb38" sx={{ margin: '0px auto' }}>
                        Đăng nhập
                    </Typography>
                    <TextField
                        required
                        id="outlined-required"
                        label="Acccount"
                        color="warning"
                        spellCheck={false}
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        color="warning"
                        name="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Link href="/login" sx={{ textDecoration: 'none', color: '#222222' }}>
                            Quên mật khẩu
                        </Link>
                        <Link href="/login" sx={{ textDecoration: 'none', color: '#222222' }}>
                            <span>Bạn chưa có tài khoản ? </span>Đăng ký
                        </Link>
                    </Box>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            height: '60px',
                            backgroundColor: '#222222',
                            color: '#ffbb38',
                            fontSize: '14px',
                            '&:hover': { backgroundColor: '#222222' },
                        }}
                        type="submit"
                    >
                        Đăng nhập
                    </Button>
            </Box>
        </Box>
        </form>
    );
}

export default Login;
