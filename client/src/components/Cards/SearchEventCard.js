// to-doimport React from 'react';
import { 
    Card, 
    CardContent, 
    CardMedia, 
    Typography, 
    Box, 
    Button, 
    Avatar, 
    IconButton,
    Link 
  } from '@mui/material';
  import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
  
  /**
   * EventCard component for displaying event information
   * 
   * @param {Object} props - Component props
   * @param {Object} props.event - Event data object containing:
   *   - title: Event title
   *   - subtitle: Optional subtitle or description
   *   - details: Event details or description text
   *   - rsoName: Name of the RSO hosting the event
   *   - rsoLogo: URL to RSO logo image
   *   - remainingTime: Time until event (e.g. "in 2 days")
   *   - image: URL to event banner image
   *   - categories: Array of event categories/types
   *   - date: Formatted event date string
   * @param {Function} props.onViewEvent - Optional callback for view event button
   */
  const EventCard = ({ event }) => {
  
    return (
      <Card sx={{ 
        borderRadius: 2, 
        overflow: 'hidden', 
        position: 'relative', 
        border: '1px solid #e0e0e0', 
        height: '100%',
        width: '100%',
        maxWidth: '400px',
        mx: 'auto',
        display: 'flex', 
        flexDirection: 'column',
        transition: 'box-shadow 0.3s ease',
        '&:hover': {
          boxShadow: 3
        }
      }}>
        {/* Header - RSO Info */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          px: 2, 
          py: 1, 
          borderBottom: '1px solid #e0e0e0',
          bgcolor: '#f9f9f9'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              src={event.rsoLogo}
              alt={event.rsoName}
              sx={{ width: 32, height: 32 }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                {event.rsoName}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {event.remainingTime}
              </Typography>
            </Box>
          </Box>
          <IconButton size="small" sx={{ color: '#5e4b8b' }}>
            <CalendarTodayIcon />
          </IconButton>
        </Box>
  
        {/* Event Image */}
        <CardMedia
          component="img"
          image={event.image}
          alt={event.title}
          sx={{ height: 180, objectFit: 'cover' }}
        />
  
        {/* Event Content */}
        <CardContent sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between', 
          p: 2 
        }}>
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {event.title}
            </Typography>
            {event.subtitle && (
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {event.subtitle}
              </Typography>
            )}
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {event.date}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2, 
                whiteSpace: 'pre-line',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {event.details}
            </Typography>
          </Box>
          
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Link to={`/Event/${event.title}`} textDecoration="none">
              <Button 
                variant="contained"
                sx={{
                  borderRadius: '62rem',
                  backgroundColor: '#5e4b8b',
                  '&:hover': { backgroundColor: '#4b3c6f' },
                  textTransform: 'none',
                  px: 3
                }}
              >
                View Event
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    );
  };
  
  export default EventCard;