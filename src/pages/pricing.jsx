import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import products from '../data/product';

export default function ProductTiers() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Box id="pricing" sx={{ py: 10, backgroundColor: '#fafafa' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Pilih Paket ERP Anda
      </Typography>

      <Box
        className="horizontal-scroll"
        sx={{
          overflowX: isMobile ? 'auto' : 'visible',
          display: 'flex',
          justifyContent: isMobile ? 'flex-start' : 'center',
          flexWrap: isMobile ? 'nowrap' : 'wrap',
          gap: 3,
          px: isMobile ? 2 : 0,
          mt: 4,
        }}
      >
        {products.map((tier, index) => {
          const isSelected = selectedIndex === index;
          const isHighlight = tier.highlight || isSelected;

          return (
            <Card
              key={index}
              sx={{
                minWidth: isMobile ? 280 : 300,
                maxWidth: 320,
                flexShrink: 0,
                border: isSelected
                  ? '2px solid #00c6ff'
                  : tier.highlight
                  ? '2px solid #1c76d2'
                  : '1px solid #ccc',
                boxShadow: isSelected ? 6 : tier.highlight ? 4 : 1,
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              {(tier.highlight || isSelected) && (
                <Chip
                  label={isSelected ? 'DIPILIH' : 'TERPOPULER'}
                  color="primary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 3,
                    fontWeight: 'bold',
                  }}
                />
              )}
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {tier.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tier.sub}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ mt: 2, fontWeight: 'bold', color: '#000' }}
                >
                  {tier.price}
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ fontWeight: 400 }}
                  >
                    /bulan
                  </Typography>
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ textDecoration: 'line-through' }}
                >
                  {tier.originalPrice}
                </Typography>
                <Typography variant="caption" color="primary">
                  {tier.discount}
                </Typography>
                {tier.bonus && (
                  <Typography
                    variant="caption"
                    color="secondary"
                    display="block"
                  >
                    {tier.bonus}
                  </Typography>
                )}

                <Button
                  variant={isSelected ? 'contained' : tier.highlight ? 'contained' : 'outlined'}
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => setSelectedIndex(index)}
                >
                  {isSelected ? 'Tier Dipilih' : 'Pilih Tier'}
                </Button>

                <List dense sx={{ mt: 2 }}>
                  {tier.features.map((feature, idx) => (
                    <ListItem key={idx} disablePadding>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckIcon fontSize="small" color="success" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
