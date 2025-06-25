import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
} from '@mui/material';

export default function ContactPage() {
  return (
    <Box id="contact" sx={{ py: 6, px: { xs: 2, md: 6 }, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Hubungi Kami
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {/* Informasi Kontak */}
        <Grid item xs={12} md={5}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Informasi Kontak
            </Typography>
            <Typography variant="body1">
              <strong>Alamat:</strong><br />
              Jl. Contoh No. 123, Jakarta, Indonesia
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Telepon:</strong><br />
              (021) 1234-5678
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Email:</strong><br />
              info@contohperusahaan.com
            </Typography>

            {/* Google Maps */}
            <Box sx={{ mt: 3 }}>
              <iframe
                title="Lokasi Kami"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.215346714808!2d106.82715331431244!3d-6.229728162745398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d7b384d6ed%3A0x80c6cce0a99f3d7d!2sMonas!5e0!3m2!1sid!2sid!4v1616939476471!5m2!1sid!2sid"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Box>
          </Paper>
        </Grid>

        {/* Formulir Kontak */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Kirim Pesan
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Nama Anda" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Subjek" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Pesan"
                  variant="outlined"
                  multiline
                  rows={5}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary">
                  Kirim Pesan
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
