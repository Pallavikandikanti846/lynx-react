import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import { Favorite, Star, LocalShipping, Security } from '@mui/icons-material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          About Lynx
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Empowering women through fashion, one style at a time
        </Typography>
      </Box>

      {/* Mission Statement */}
      <Box sx={{ mb: 8 }}>
        <Card sx={{ p: 4, backgroundColor: '#f8f9fa' }}>
          <CardContent>
            <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 3 }}>
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'center' }}>
              At Lynx, we believe that every woman deserves to feel confident, beautiful, and empowered through fashion. 
              Our mission is to provide high-quality, trendy clothing that celebrates individuality and helps women 
              express their unique style with confidence.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Values */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Our Values
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>
                <Favorite />
              </Avatar>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Quality
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We never compromise on quality. Every piece in our collection is carefully selected and crafted 
                  to meet the highest standards.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'secondary.main' }}>
                <Star />
              </Avatar>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Style
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We stay ahead of fashion trends to bring you the latest styles that help you look and feel 
                  your absolute best.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'success.main' }}>
                <LocalShipping />
              </Avatar>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Service
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exceptional customer service is at the heart of everything we do. We're here to help you 
                  find your perfect style.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6} lg={3}>
            <Card sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, bgcolor: 'info.main' }}>
                <Security />
              </Avatar>
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Trust
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Building lasting relationships with our customers through transparency, honesty, and reliability 
                  in everything we do.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Story */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Lynx was born from a simple yet powerful idea: every woman deserves to feel beautiful and confident 
              in what she wears. What started as a small boutique has grown into a beloved destination for women 
              seeking quality fashion that celebrates their individuality.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Over the years, we've built a community of fashion-forward women who trust us to provide not just 
              clothing, but confidence. Our team of style experts works tirelessly to curate collections that 
              blend current trends with timeless elegance.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Today, Lynx continues to grow and evolve, but our commitment to empowering women through fashion 
              remains unchanged. We're excited to be part of your style journey.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 400,
                backgroundColor: 'primary.light',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '6rem'
              }}
            >
              👗✨
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Info */}
      <Box sx={{ textAlign: 'center', backgroundColor: '#f8f9fa', p: 4, borderRadius: 2 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Have questions or need styling advice? We'd love to hear from you!
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          📧 hello@lynxfashion.com
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          📱 +1 (555) 123-4567
        </Typography>
      </Box>
    </Container>
  );
};

export default About; 