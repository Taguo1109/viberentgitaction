// components/LoginDialog.tsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';

interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

const LoginDialog = ({ open, onClose }: LoginDialogProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:8080/login',
        {
          email,
          password,
        },
        {
          withCredentials: true, // 如果你用 cookie，要加這個
        }
      );

      console.log('Login success:', response.data);
      // 儲存 token 或其他使用者資訊
      onClose();
    } catch (error) {
      const err = error as AxiosError;

      if (err.response) {
        // 從後端來的錯誤訊息
        console.error('Login failed:', err.response.data);
        alert('登入失敗：' + JSON.stringify(err.response.data));
      } else {
        // 其他錯誤，如網路中斷、CORS 等
        console.error('Login failed:', err.message);
        alert('發生錯誤：' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth='xs' fullWidth>
      <DialogTitle sx={{ fontWeight: 'bold', color: 'primary.main' }}>
        登入
      </DialogTitle>
      <DialogContent>
        <Box display='flex' flexDirection='column' gap={2} mt={1}>
          <TextField
            label='Email'
            type='email'
            fullWidth
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label='密碼'
            type='password'
            fullWidth
            variant='outlined'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color='secondary'>
          取消
        </Button>
        <Button
          onClick={handleLogin}
          color='primary'
          variant='contained'
          disabled={loading}
        >
          {loading ? '登入中...' : '登入'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
