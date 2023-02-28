import React, { useEffect, useState } from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { Navigate } from 'react-router-dom';

function Login() {
    const [dataForm, setDataForm] = useState({
        email: '',
        password: '',
    });
    const [dataApi, setDataApi] = useState({
        email: '',
        password: '',
    });
    const login = () => {
        if (dataForm.email !== '' && dataForm.password !== '') {
            const _formData = new FormData();
            _formData.append('email', dataForm.email);
            _formData.append('password', dataForm.password);
            const requestOptions = {
                method: 'POST',
                body: _formData,
            };
            fetch('http://127.0.0.1:8000/api/users/login', requestOptions)
                .then((res) => res.json())
                .then((json) => {
                    setDataApi(json);
                });
        }
    };
    useEffect(() => {
        if(dataApi[0]!==undefined){
            if (dataApi[0].email == dataForm.email) {
                console.log("yes");
            } else {
                console.log('no');
            }
        }
    }, [dataApi]);
    return (
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
                    onChange={(e) => setDataForm({ ...dataForm, email: e.target.value })}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    color="warning"
                    name="password"
                    onChange={(e) => setDataForm({ ...dataForm, password: e.target.value })}
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
                    onClick={() => login()}
                >
                    Đăng nhập
                </Button>
            </Box>
        </Box>
    );
}

export default Login;
