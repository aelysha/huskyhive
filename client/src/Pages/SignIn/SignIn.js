import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import husky from './image.png'
import {
  Box,
  Card,
  Typography,
  Container,
  styled
} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  overflow: 'hidden',
}));

const SignIn = () => {
  const handleLoginSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // Redirect to home page after successful login
    window.location.href = '/home';
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2
    }}>
      <Container maxWidth="xl" sx={{ height: '100%' }}>
        <StyledCard sx={{ 
          width: '100%', 
          maxWidth: '1400px',
          height: '85vh',
          mx: 'auto'
        }}>
          <Box sx={{ 
            display: 'flex', 
            height: '100%',
            '@media (max-width: 768px)': {
              flexDirection: 'column'
            }
          }}>
            {/* Left Side - Husky Image */}
            <Box sx={{ 
              flex: 1,
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4
            }}>
              <Box sx={{ 
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={husky}
                  alt="Husky mascot"
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Box>

            {/* Right Side - Login Form */}
            <Box sx={{ 
              flex: 1,
              backgroundColor: 'rgba(197, 180, 227, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 4
            }}>
              <Box sx={{ 
                textAlign: 'center',
                width: '100%',
                maxWidth: '500px'
              }}>
                {/* Student Side Label */}
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#4B2E83',
                    fontWeight: 600,
                    mb: 2,
                    fontSize: '24px'
                  }}
                >
                  Student at UW Seattle?
                </Typography>

                {/* Log In Header */}
                <Typography 
                  variant="h1" 
                  sx={{ 
                    color: '#4B2E83', 
                    fontWeight: 'bold', 
                    fontSize: { xs: '5rem', md: '7rem' },
                    mb: 6,
                    lineHeight: 0.9,
                    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  Log In
                </Typography>

                {/* Google Login Button - Centered and Scaled */}
                <Box sx={{ 
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  py: 5,
                  '& > div': {
                    transform: 'scale(1.8)',
                    transformOrigin: 'center'
                  }
                }}>
                  <GoogleLogin
                    onSuccess={handleLoginSuccess}
                    onError={handleLoginError}
                    theme="outline"
                    size="large"
                    text="signin_with"
                    shape="rectangular"
                    logo_alignment="left"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </StyledCard>
      </Container>
    </Box>
  );
};

export default SignIn;