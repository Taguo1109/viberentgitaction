import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import { useState } from 'react';
import LoginDialog from './LoginDialog';

const Navbar = () => {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <AppBar position='sticky' color='secondary' elevation={0}>
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography
            variant='h6'
            component={RouterLink}
            to='/'
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'primary.main',
              fontWeight: 'bold',
            }}
          >
            Viberent
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              component={RouterLink}
              to='/search'
              startIcon={<SearchIcon />}
              color='primary'
            >
              搜尋
            </Button>
            <Button
              component={RouterLink}
              to='/favorites'
              startIcon={<FavoriteBorderIcon />}
              color='primary'
            >
              收藏
            </Button>
            <Button
              component={RouterLink}
              to='/profile'
              startIcon={<PersonOutlineIcon />}
              color='primary'
            >
              會員資料
            </Button>
            <Button
              startIcon={<LoginIcon />}
              color='primary'
              onClick={() => setLoginOpen(true)}
            >
              登入
            </Button>
            {/* 登入 Dialog */}
            <LoginDialog open={loginOpen} onClose={() => setLoginOpen(false)} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
