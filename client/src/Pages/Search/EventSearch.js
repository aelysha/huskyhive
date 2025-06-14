import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Checkbox, 
  FormControlLabel, 
  FormGroup, 
  InputBase, 
  IconButton, 
  Button,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useTheme } from '@mui/material/styles';


import { events } from './data/eventData';
import { rsoData } from './data/rsoData';

// Helper functions for your data structure
const formatTime = (timeStr) => {
  if (!timeStr || timeStr === '00:00:00') return '';
  const [hours, minutes] = timeStr.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
};

const getRelativeTime = (dateStr) => {
  const eventDate = new Date(dateStr);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  
  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';  
  if (diffDays < 0) return 'Past Event';
  if (diffDays < 7) return `in ${diffDays} days`;
  const weeks = Math.floor(diffDays / 7);
  return `in ${weeks} week${weeks > 1 ? 's' : ''}`;
};

const categorizeEvent = (event) => {
  const title = event.title.toLowerCase();
  const description = event.description.toLowerCase();
  
  if (title.includes('walk') || title.includes('climb') || description.includes('outdoor') || title.includes('crags')) {
    return 'Outdoor/Recreation';
  }
  if (title.includes('night') || title.includes('social') || description.includes('friends') || title.includes('boba')) {
    return 'Social';
  }
  if (title.includes('panel') || title.includes('workshop') || description.includes('professional') || title.includes('alumni')) {
    return 'Professional Development';
  }
  if (title.includes('fashion') || title.includes('art') || description.includes('design') || title.includes('prismatic')) {
    return 'Arts/Fashion';
  }
  if (title.includes('contest') || title.includes('puzzle') || description.includes('academic') || title.includes('focus areas')) {
    return 'Academic';
  }
  if (title.includes('mariners') || title.includes('game') || description.includes('sport')) {
    return 'Sports';
  }
  if (title.includes('bagel') || title.includes('boba') || description.includes('food') || title.includes('cookies')) {
    return 'Food/Dining';
  }
  return 'Social'; // default
};

const eventTypes = [
  "Club Meeting",
  "Cultural",
  "Fair or Festival",
  "Fundraiser",
  "Guest Lecturer or Speaker",
  "Performance",
  "Presentation or Workshop"
];

// Event Card Component adapted for your data structure
const EventCard = ({ event }) => {
  const rsoName = event.rso_name ;
  const rsoDataCard = rsoData.find(rso => rso.rso_name === rsoName);
  const rsoLogo = rsoDataCard.rso_logo
  const theme = useTheme();


  const fullLocation = event.room_details 
    ? `${event.location} ${event.room_details}`
    : event.location;
  const category = categorizeEvent(event);
  
  
  return (
    <Card 
      sx={{ 
        width: 400, 
        height: 350, 
        borderRadius: 3, 
        overflow: 'hidden', 
        position: 'relative', 
        border: '1px solid #ccc', 
        boxShadow: 3, 
        marginY: 2, 
        display: 'flex', 
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: 2,
          backgroundColor: 'rgba(220,205,226)',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            src={rsoLogo}
            alt={rsoName}
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" 
            sx={{
              fontSize: '0.85rem',
              display: '-webkit-box',
              WebkitLineClamp: 1,      // Limit to 1 line
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {rsoName}
            </Typography>
            <Typography variant="caption">{getRelativeTime(event.start_date)}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton size="small">
            <CalendarMonthIcon fontSize="medium"/>
          </IconButton>
        </Box>
      </Box>

      {/* Image placeholder */}
      <CardMedia
        component="img"
        height="150"
        image={event.image_url}
        alt={`${event.title} Event Image`}
        sx={{
          objectPosition: 'top'
        }}
      />

      {/* Content */}
      <CardContent 
        sx={{ 
          backgroundColor: 'rgba(220,205,226)',
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: "space-between" 
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold"
           sx={{
            fontSize: '1rem',
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: 1,      // Limit to 2 lines (or 1, depending on space)
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {event.title}
          </Typography>
          
          <Typography variant="body2" gutterBottom sx={{ fontSize: '0.85rem' }}>
            {formatDate(event.start_date)} {formatTime(event.start_time_txt) && `at ${formatTime(event.start_time_txt)}`}
          </Typography>
          
          <Typography variant="body2" gutterBottom sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
            {fullLocation}
          </Typography>
        
        </Box>
        
        <Box display="flex" justifyContent="flex-end" mt={-4}>

          <Button
              component={RouterLink}
              to={`/Event/${encodeURIComponent(event.title)}`} // or rso.slug if you use a URL-safe string
              sx={{
                backgroundColor: '#5e4b8b',
                color: 'white',
                borderRadius: '20px',
                textTransform: 'none',
                px: 3,
                '&:hover': {
                 backgroundColor: '#4a3a70',
                },
              }}
              onClick={(e) => e.stopPropagation()}
            >
            View More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const EventSearch = () => {
  const [dateFilters, setDateFilters] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateExpanded, setDateExpanded] = useState(true);
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);
  const [eventTypesExpanded, setEventTypesExpanded] = useState(true);

  const handleDateChange = (date) => {
    if (dateFilters.includes(date)) {
      setDateFilters(dateFilters.filter(d => d !== date));
    } else {
      setDateFilters([...dateFilters, date]);
    }
  };

  const handleTypeChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredEvents = events.filter(event => {
    const matchesSearch = searchQuery.trim() === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.rso_name?.toLowerCase().includes(searchQuery.toLowerCase())
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const eventCategory = categorizeEvent(event);
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(eventCategory);
    
    // Date filtering logic
    let matchesDate = dateFilters.length === 0;
    if (dateFilters.length > 0) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const eventDate = new Date(event.start_date);
      eventDate.setHours(0, 0, 0, 0);
      
      const diffDays = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
      
      matchesDate = dateFilters.some(filter => {
        if (filter === 'Today') return diffDays === 0;
        if (filter === 'Tomorrow') return diffDays === 1;
        if (filter === 'This Week') return diffDays >= 0 && diffDays <= 7;
        if (filter === 'Next Week') return diffDays > 7 && diffDays <= 14;
        return true;
      });
    }
    
    return matchesSearch && matchesType && matchesDate;
  });

  // Sort events by date
  const sortedEvents = filteredEvents.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
  const theme = useTheme();


  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
    {/* Search Bar */}
       <Paper sx={{
         p: '8px 16px',
         display: 'flex',
         alignItems: 'center',
         mb: 3,
         borderRadius: 25,
         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
       }}>
         <SearchIcon sx={{ color: '#999', mr: 1 }} />
         <InputBase
           sx={{
             ml: 1,
             flex: 1,
             fontSize: '1.1rem',
             color: theme.palette.text.primary
           }}
           placeholder="Search for Events"
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
         />
       </Paper>

        <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
          {/* Filter sidebar */}
          <Box sx={{ 
            width: 200,
            minWidth: 200,
            flexShrink: 0
          }}>
            <Paper sx={{ 
              p: 2.5,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
             <Typography variant="h2" fontWeight="bold" sx={{ mb: 2, fontSize: '1.5rem', fontFamily: theme.typography.fontFamily, color: theme.palette.custom.onSecondaryContainer }}>
                Filters
              </Typography>
              
              {/* Dates section */}
              <Box sx={{ mb: 3 }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 1,
                    cursor: 'pointer'
                  }}
                  onClick={() => setDateExpanded(!dateExpanded)}
                >
                <Typography variant="h4" fontWeight="600" sx={{fontSize: '0.9rem', color: theme.palette.custom.onSecondaryContainer }}>
                    Dates
                  </Typography>
                  {dateExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                </Box>

                {dateExpanded && (
                  <FormGroup>
                    {['Today', 'Tomorrow', 'This Week', 'Next Week'].map(date => (
                      <FormControlLabel
                        key={date}
                        control={
                          <Checkbox 
                            size="small"
                            checked={dateFilters.includes(date)} 
                            onChange={() => handleDateChange(date)}
                             sx={{
                              color: theme.palette.custom.onSurfaceVariant,
                              '&.Mui-checked': { color: theme.palette.custom.onSurfaceVariant, },
                            }}
                          />
                        }
                        label={
                          <Typography variant="body2" sx={{ 
                            fontSize: '0.8rem',
                            fontFamily: theme.typography.fontFamily,
                            color: theme.palette.text.primary
                          }}>
                            {date}
                          </Typography>}
                      />
                    ))}
                  </FormGroup>
                )}
              </Box>

              {/* Categories section */}
              <Box sx={{ mb: 3 }}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 1,
                    cursor: 'pointer'
                  }}
                  onClick={() => setCategoriesExpanded(!categoriesExpanded)}
                >
                <Typography variant="h4" fontWeight="600" sx={{fontSize: '0.9rem', color: theme.palette.custom.onSecondaryContainer }}>
                    Categories
                  </Typography>
                  {categoriesExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                </Box>

                {categoriesExpanded && (
                  <FormGroup>
                    {['Outdoor/Recreation', 'Social', 'Academic', 'Sports', 'Arts/Fashion', 'Food/Dining', 'Professional Development'].map(category => (
                      <FormControlLabel
                        key={category}
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedTypes.includes(category)}
                            onChange={() => handleTypeChange(category)}
                             sx={{
                              color: theme.palette.custom.onSurfaceVariant,
                              '&.Mui-checked': { color: theme.palette.custom.onSurfaceVariant, },
                            }}
                          />
                        }
                        label={
                          <Typography variant="body2" sx={{ 
                            fontSize: '0.8rem',
                            fontFamily: theme.typography.fontFamily,
                            color: theme.palette.text.primary
                          }}>
                            {category}
                          </Typography>
                        }
                        sx={{ mb: 0.5 }}
                      />
                    ))}
                  </FormGroup>
                )}
              </Box>

              {/* Event Types section */}
              <Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 1,
                    cursor: 'pointer'
                  }}
                  onClick={() => setEventTypesExpanded(!eventTypesExpanded)}
                >
                <Typography variant="h4" fontWeight="600" sx={{fontSize: '0.9rem', color: theme.palette.custom.onSecondaryContainer }}>
                    Event Types
                  </Typography>
                  {eventTypesExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                </Box>

                {eventTypesExpanded && (
                  <FormGroup>
                    {eventTypes.map(type => (
                      <FormControlLabel
                        key={type}
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedTypes.includes(type)}
                            onChange={() => handleTypeChange(type)}
                            sx={{
                              color: theme.palette.custom.onSurfaceVariant,
                              '&.Mui-checked': { color: theme.palette.custom.onSurfaceVariant, },
                            }}
                          />
                        }
                        label={
                          <Typography variant="body2" sx={{ 
                            fontSize: '0.8rem',
                            fontFamily: theme.typography.fontFamily,
                            color: theme.palette.text.primary
                          }}>
                            {type}
                          </Typography>
                        }
                        sx={{ mb: 0.5 }}
                      />
                    ))}
                  </FormGroup>
                )}
              </Box>
            </Paper>
          </Box>

          {/* Event Grid */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box 
              sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              mb: 2,
            }}
            >
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: theme.palette.fontFamily }}>
              {sortedEvents.length} results
            </Typography>
           </Box>
            
            <Grid container spacing={3}>
              {sortedEvents.map((event) => (
                <Grid item xs={12} sm={4} md={4} key={event.event_id}>
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>

            {/* No Results Message */}
            {sortedEvents.length === 0 && (
              <Box sx={{ 
                textAlign: 'center', 
                py: 4,
                color: 'text.secondary'
              }}>
                <Typography variant="h6" sx={{ mb: 1, fontFamily: 'Roboto, sans-serif' }}>
                  No events found
                </Typography>
                <Typography variant="body2" sx={{ fontFamily: 'Roboto, sans-serif' }}>
                  Try adjusting your filters or search term
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventSearch;