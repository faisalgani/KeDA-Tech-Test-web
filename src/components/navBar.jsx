import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';

import AuthModal from '../components/auth';

export default function NavBar({ onNavigate }) {
  const [openAuth, setOpenAuth] = useState(false);

  return (
     <>
    <AppBar position="fixed" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => onNavigate('all')}>
          MyERP
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => onNavigate('about')}>About</Button>
          <Button color="inherit" onClick={() => onNavigate('pricing')}>Pricing</Button>
          <Button color="inherit" onClick={() => onNavigate('contact')}>Contact</Button>
          <Button
            onClick={() => setOpenAuth(true)}
            variant="outlined"
            sx={{
              borderColor: '#ffffff',
              color: '#ffffff',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            LOGIN
          </Button>
        </Box>
      </Toolbar>

      <AuthModal open={openAuth} onClose={() => setOpenAuth(false)} />
    </AppBar>
    </>
  );
}
