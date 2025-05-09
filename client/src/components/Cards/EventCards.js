import { Button, AppBar, Toolbar, Typography, Card, CardContent, Box, CardMedia, Avatar, Stack, IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const EventCard = () => {
    return (
      <Card
        sx={{
          borderRadius: 3,
          overflow: 'hidden',
          maxWidth: 400,
          position: 'relative',
          border: '1px solid #ccc',
          boxShadow: 3,
          marginTop: 2
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            backgroundColor: '#dccde2',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              src="logo512.png"
              alt="MESH UW"
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                MESH UW
              </Typography>
              <Typography variant="caption">in 1 day</Typography>
            </Box>
          </Box>
  
          <IconButton>
            <CalendarMonthIcon />
          </IconButton>
        </Box>
  
        {/* Image */}
        <CardMedia
          component="img"
          image="logo512.png"
          alt="PRISMATIC"
          sx={{ height: 180, objectFit: 'cover' }}
        />
  
        {/* Content */}
        <CardContent sx={{ backgroundColor: '#dccde2' }}>
          <Typography variant="h6" fontWeight="bold">
            PRISMATIC
          </Typography>
          <Typography variant="body2" gutterBottom>
            May 17th, 4:00pm - 7:00pm
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            We invite you to join us for our annual fashion show! Taking place
            May 17th from 4–7PM at the Nippon Kan Theatre, this is an exhibition
            of the talents and creativity of Seattle's own fashion designers.
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
                variant="contained"
                sx={{ borderRadius: '62rem',
                backgroundColor: '#5e4b8b',
                '&:hover': { backgroundColor: '#4b3c6f' },
                textTransform: 'none',
                }}
            >
                View More
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  };
  
export default EventCard;