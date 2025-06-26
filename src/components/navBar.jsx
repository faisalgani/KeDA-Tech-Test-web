import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AuthModal from '../components/auth';

export default function NavBar({ onNavigate }) {
  const [openAuth, setOpenAuth] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleNavigate = (section) => {
    onNavigate(section);
    handleMenuClose();
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{ cursor: 'pointer' }}
            onClick={() => onNavigate('all')}
          >
            MyERP
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={() => handleNavigate('about')}>About</MenuItem>
                <MenuItem onClick={() => handleNavigate('pricing')}>Pricing</MenuItem>
                <MenuItem onClick={() => handleNavigate('contact')}>Contact</MenuItem>
                <MenuItem onClick={() => { setOpenAuth(true); handleMenuClose(); }}>
                  Login
                </MenuItem>
              </Menu>
            </>
          ) : (
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
          )}
        </Toolbar>
      </AppBar>

      <AuthModal open={openAuth} onClose={() => setOpenAuth(false)} />
    </>
  );
}
