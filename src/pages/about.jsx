import { Container, Typography, Box, Grid } from '@mui/material';
import aboutImage from '../assets/images/ERP/658.jpg';

export default function About() {
  return (
   <Box id="about" sx={{ py: 10, backgroundColor: '#f0f4f8', color: '#1a1a1a' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Tentang Kami
        </Typography>

        <Grid container spacing={4} alignItems="center" mt={4}>
          {/* Gambar */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={aboutImage}
              alt="About us"
              sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>

          {/* Deskripsi */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Digitalisasi Bisnis Anda dengan MyERP
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet diam ut felis dapibus luctus. Suspendisse potenti. Fusce in eros at elit vulputate lacinia nec nec orci. Pellentesque at erat mi. 
            </Typography>
            <Typography paragraph>
              Donec at risus ut justo mattis fermentum. Morbi hendrerit urna a magna suscipit, sed efficitur tortor pretium. Aenean nec turpis et ante fermentum sagittis nec id elit. Nunc luctus ipsum sed sapien porttitor, sed convallis libero ultrices.
            </Typography>
            <Typography paragraph>
              Integer sodales magna et sem tincidunt laoreet. Aenean facilisis, mauris nec ultricies tincidunt, sapien augue varius eros, eget facilisis magna velit sit amet purus.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
