import React from 'react';
import { Typography, Card, CardContent, Avatar, Box, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const RSOCard = ({ rso, logo, onClick }) => {
  return (
    <Card 
      sx={{ 
        width: 240, 
        borderRadius: '1rem', 
        display: 'flex', 
        flexDirection: 'column', 
        height: 220,
        margin: 1,
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.03)',
        }
      }}
      onClick={onClick}
    >
      <Box sx={{ 
        height: 160, 
        backgroundColor: '#f0f0f0', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
      }}>
        <Avatar 
          src={logo} 
          alt={rso.name} 
          sx={{ 
            width: 80, 
            height: 80, 
            objectFit: 'contain',
          }} 
        />
      </Box>
      <CardContent sx={{ 
        p: 2, 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 60
      }}>
        <Typography 
          variant="subtitle1" 
          fontWeight={600} 
          sx={{ 
            textAlign: 'left',
            fontSize: '0.9rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {rso.name}
        </Typography>
        <IconButton 
          size="small" 
          sx={{ color: '#5e4b8b' }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default RSOCard;