import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';

export default function LoginModal({ open, onClose }) {
  const handleLogin = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle align="center">Login ke MyERP</DialogTitle>
      <DialogContent>
        <Typography variant="body2" align="center" mb={2}>
          Masukkan email dan password anda
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            required
          />
          <DialogActions sx={{ mt: 2, justifyContent: 'center' }}>
            <Button onClick={onClose} color="inherit">
              Batal
            </Button>
            <Button type="submit" variant="contained">
              Login
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
