import { Container, Typography, Box, Grid, TextField, Button } from '@mui/material';
import contactImage from '../assets/images/contact/20943705.jpg'; 

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: '#f0f4f8', color: '#1a1a1a' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Kontak Kami
        </Typography>

        <Grid container spacing={4} alignItems="center" mt={4}>
          {/* Gambar */}
          <Grid item xs={12} md={6}>
            {/* <Box
              component="img"
              src={contactImage}
              alt="Contact us"
              sx={{ width: '100%', height:'50%', borderRadius: 2, boxShadow: 3 }}
            /> */}
          </Grid>

          {/* Form dan Info Kontak */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Hubungi Tim MyERP
            </Typography>
            <Typography paragraph>
              Kami siap menjawab pertanyaan Anda dan memberikan informasi lebih lanjut. Silakan isi formulir berikut atau hubungi kami melalui informasi kontak di bawah.
            </Typography>

            <Box component="form" sx={{ mt: 2 }} noValidate autoComplete="off">
              <TextField
                label="Nama"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Pesan"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button variant="contained" sx={{ mt: 2 }}>
                Kirim Pesan
              </Button>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle1">Alamat:</Typography>
              <Typography variant="body2">
                Jl. ERP Solution No. 45, Jakarta Selatan, Indonesia
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>Email:</Typography>
              <Typography variant="body2">support@myerp.co.id</Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>Telepon:</Typography>
              <Typography variant="body2">+62 812-3456-7890</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
