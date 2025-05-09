import { Button, Typography, Card, CardContent, Box, CardMedia, Avatar, IconButton } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom'; 

const EventCard = (props) => {
  const {
      rsoName,
      rsoLogo,
      remainingTime,
      eventImage,
      eventTitle,
      eventDate,
      eventDescr
    } = props;
    return (
      <Card sx={{ width: 400, height: 450, borderRadius: 3, overflow: 'hidden', position: 'relative', border: '1px solid #ccc', boxShadow: 3, marginTop: 2, display: 'flex', flexDirection: 'column'}}>
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
              src={rsoLogo}
              alt={rsoName}
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                {rsoName}
              </Typography>
              <Typography variant="caption">{remainingTime}</Typography>
            </Box>
          </Box>
  
          <IconButton>
            <CalendarMonthIcon />
          </IconButton>
        </Box>
  
        {/* Image */}
        <CardMedia component="img" image={eventImage} alt={eventTitle} sx={{ height: 150, objectFit: 'cover' }} />
  
        {/* Content */}
        <CardContent sx={{ backgroundColor: '#dccde2', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent:"space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            {eventTitle}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {eventDate}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {eventDescr}
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Link to="/Events" textDecoration="none">
              <Button
                  variant="contained"
                  sx={{ borderRadius: '62rem',
                  backgroundColor: '#5e4b8b',
                  '&:hover': { backgroundColor: '#4b3c6f' },
                  textTransform: 'none',
                  marginTop: 'auto'
                  }}
              >
                  View More
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    );
  };
  
export default EventCard;