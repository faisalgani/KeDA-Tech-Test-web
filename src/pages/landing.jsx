import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from '@mui/material';

const products = [
  {
    id: 'P001',
    name: 'ERP Basic',
    category: 'Software',
    price: 1000000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 'P002',
    name: 'Hosting Premium',
    category: 'Hosting',
    price: 2500000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 'P003',
    name: 'Support Pro',
    category: 'Service',
    price: 1500000,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 'P004',
    name: 'ERP Mobile',
    category: 'Software',
    price: 500000,
    image: 'https://via.placeholder.com/150',
  },
  // Tambahkan lebih banyak produk sesuai kebutuhan
];

export default function landing() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Daftar Produk
      </Typography>

      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          py: 2,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ccc',
            borderRadius: '4px',
          },
        }}
      >
        {products.map((product) => (
          <Card key={product.id} sx={{ minWidth: 250, flexShrink: 0 }}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Kategori: {product.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Harga: Rp {product.price.toLocaleString('id-ID')}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Detail</Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
