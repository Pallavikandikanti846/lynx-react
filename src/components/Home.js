import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { ShoppingBag, Category, Star } from '@mui/icons-material';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ff69b4 0%, #f8bbd9 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to Lynx
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4, opacity: 0.9 }}>
            Discover the latest trends in women's fashion
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              size="large"
              startIcon={<ShoppingBag />}
              sx={{
                backgroundColor: 'white',
                color: '#ff69b4',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              Shop Now
            </Button>
            <Button
              component={Link}
              to="/categories"
              variant="outlined"
              size="large"
              startIcon={<Category />}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Browse Categories
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Why Choose Lynx?
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Box sx={{ fontSize: '3rem', mb: 2 }}>👗</Box>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Trendy Collection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Stay ahead of fashion with our curated collection of the latest trends and styles.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Box sx={{ fontSize: '3rem', mb: 2 }}>✨</Box>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Quality Assured
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Every piece in our collection meets the highest standards of quality and craftsmanship.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Box sx={{ fontSize: '3rem', mb: 2 }}>🚀</Box>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Fast Delivery
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get your favorite pieces delivered quickly and securely to your doorstep.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 6 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Elevate Your Style?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Explore our extensive collection of women's clothing and accessories
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            size="large"
            startIcon={<Star />}
            sx={{ fontSize: '1.1rem', px: 4, py: 1.5 }}
          >
            Start Shopping
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 