import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';
import { Category, ShoppingBag } from '@mui/icons-material';
import axios from 'axios';
import API_BASE_URL from '../config/api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/categories`);
      setCategories(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch categories. Please try again later.');
      console.error('Error fetching categories:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="error" sx={{ fontSize: '1.1rem' }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Product Categories
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Explore our diverse range of fashion categories
        </Typography>
      </Box>

      {categories.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Category sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h6" color="text.secondary">
            No categories available at the moment.
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} key={category._id}>
              <Card 
                component={Link}
                to={`/products?category=${encodeURIComponent(category.name)}`}
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box sx={{ fontSize: '4rem', mb: 2 }}>
                    {category.name === 'Dresses' && '👗'}
                    {category.name === 'Tops' && '👚'}
                    {category.name === 'Bottoms' && '👖'}
                    {category.name === 'Outerwear' && '🧥'}
                    {category.name === 'Accessories' && '👜'}
                    {category.name === 'Shoes' && '👠'}
                    {!['Dresses', 'Tops', 'Bottoms', 'Outerwear', 'Accessories', 'Shoes'].includes(category.name) && '✨'}
                  </Box>
                  
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                    {category.name}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {category.description || 'Explore our collection of ' + category.name.toLowerCase()}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                    <ShoppingBag color="primary" />
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 'bold' }}>
                      Browse Products
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      
      {categories.length > 0 && (
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body1" color="text.secondary">
            {categories.length} category{categories.length !== 1 ? 'ies' : 'y'} available
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Categories; 