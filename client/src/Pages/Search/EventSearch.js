import React, { useState, useEffect } from 'react';
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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';

// RSO mapping based on event content analysis
const rsoMapping = {
  '6097e77c-d01a-45c0-be0e-1bddf887a02e': 'Wildlife Society & Hiking Club',
  '006fe636-1094-4694-b5ba-2f2d9a59d2cc': 'Garden of Ideas & Philosophy Club',
  '474797a2-d037-422d-a707-e8baab8c1c78': 'Engineering Societies (ASME/BMES)',
  '8d47e2da-f1a6-428e-a894-9bb8a73f290b': 'Informatics Student Organization',
  'ad24b30c-ead9-46e7-bf91-7e66f9541511': 'MESH Fashion',
  '7d6ff4c0-6878-47eb-8b71-6dfdb1f6dc7c': 'Climbing Club UW',
  'af2491e4-f8b2-4857-bd44-af26eb953ef4': 'iQueeries',
  '5935c906-862e-4af1-b106-a259e85690b1': 'Girls Who Code',
  'aff7b786-ec99-4bb1-b606-342cd7ea051b': 'Tech Talks & Workshops'
};

// CSV data will be loaded here - in a real app, this would come from your API
const csvEventData = [
  {
    title: "2nd Annual Bagel Walk!",
    start_date: "2025-04-20",
    start_time_txt: "10:00:00",
    description: "The bagel walk is BACK! Join us for some of Seattle's best bagels and spring blooms as we walk from UW to @oxbow_montlake to the Washington Park Arboretum.",
    location: "Burke Museum",
    room_details: "",
    rso_id: "6097e77c-d01a-45c0-be0e-1bddf887a02e",
    is_paid: false,
    rsvp_enabled: true,
    event_id: "270cb5c9-6d0b-4a00-aa62-bf2106d67e22"
  },
  {
    title: "Movie Night!",
    start_date: "2025-03-14",
    start_time_txt: "19:00:00",
    description: "We're doing a pre-finals brain break movie night next week! Join us on Friday March 14th in Savery Hall room 264.",
    location: "SAV",
    room_details: "264",
    rso_id: "6097e77c-d01a-45c0-be0e-1bddf887a02e",
    is_paid: false,
    rsvp_enabled: true,
    event_id: "3b130d46-780c-4f07-8d2e-c76e128dd053"
  },
  {
    title: "Garden of Ideas x Philosophy Club Puzzle Contest",
    start_date: "2025-05-01",
    start_time_txt: "17:00:00",
    description: "We had loads of fun creating cartoons last quarter, so now we are bringing a Philosophical Puzzle Contest this quarter!",
    location: "SAV",
    room_details: "168",
    rso_id: "006fe636-1094-4694-b5ba-2f2d9a59d2cc",
    is_paid: false,
    rsvp_enabled: false,
    event_id: "425eb308-9f88-45da-a489-1a34d5eaf3e6"
  },
  {
    title: "Mariners College Night",
    start_date: "2025-05-09",
    start_time_txt: "18:00:00",
    description: "Take me out to the ball game! Join ASME, BMES, and Washington Tunneling for reduced student prices to watch the Mariners!",
    location: "U-District Station",
    room_details: "",
    rso_id: "474797a2-d037-422d-a707-e8baab8c1c78",
    is_paid: true,
    rsvp_enabled: true,
    event_id: "mariners-2025"
  },
  {
    title: "PRISMATIC",
    start_date: "2025-05-17",
    start_time_txt: "16:00:00",
    description: "Come join us at PRISMATIC, MESH's 4th annual spring fashion show featuring 22 different collections!",
    location: "Nippon Kan Theater",
    room_details: "",
    rso_id: "ad24b30c-ead9-46e7-bf91-7e66f9541511",
    is_paid: true,
    rsvp_enabled: true,
    event_id: "prismatic-2025"
  },
  {
    title: "CCUW Crags Night",
    start_date: "2025-05-02",
    start_time_txt: "20:00:00",
    description: "Crags night this Friday May 2nd! Bring some friends and let's do some climbing!",
    location: "Crags Climbing Center @ the IMA",
    room_details: "",
    rso_id: "7d6ff4c0-6878-47eb-8b71-6dfdb1f6dc7c",
    is_paid: false,
    rsvp_enabled: true,
    event_id: "crags-night-2025"
  }
];

// Event categories based on content analysis
const eventCategories = [
  "Outdoor/Recreation",
  "Social", 
  "Academic",
  "Sports",
  "Arts/Fashion",
  "Food/Dining",
  "Professional Development"
];

// Utility functions
const formatTime = (timeStr) => {
  if (!timeStr) return '';
  const [hours, minutes] = timeStr.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long',
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const getRelativeTime = (dateStr) => {
  const eventDate = new Date(dateStr);
  const today = new Date();
  const diffTime = eventDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Tomorrow';
  if (diffDays < 0) return 'Past event';
  if (diffDays < 7) return `in ${diffDays} days`;
  const weeks = Math.floor(diffDays / 7);
  return `in ${weeks} week${weeks > 1 ? 's' : ''}`;
};

const categorizeEvent = (event) => {
  const title = event.title.toLowerCase();
  const description = event.description.toLowerCase();
  
  if (title.includes('walk') || title.includes('climb') || description.includes('outdoor')) {
    return 'Outdoor/Recreation';
  }
  if (title.includes('night') || title.includes('social') || description.includes('friends')) {
    return 'Social';
  }
  if (title.includes('panel') || title.includes('workshop') || description.includes('professional')) {
    return 'Professional Development';
  }
  if (title.includes('fashion') || title.includes('art') || description.includes('design')) {
    return 'Arts/Fashion';
  }
  if (title.includes('contest') || title.includes('puzzle') || description.includes('academic')) {
    return 'Academic';
  }
  if (title.includes('mariners') || title.includes('game') || description.includes('sport')) {
    return 'Sports';
  }
  if (title.includes('bagel') || title.includes('boba') || description.includes('food')) {
    return 'Food/Dining';
  }
  return 'Social'; // default
};

// Event Card Component
const EventCard = ({ event }) => {
  const fullLocation = event.room_details 
    ? `${event.location} - ${event.room_details}`
    : event.location;
  
  const category = categorizeEvent(event);
  const rsoName = rsoMapping[event.rso_id] || 'Student Organization';
  
  return (
    <Card 
      sx={{ 
        width: 400, 
        height: 450, 
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
          backgroundColor: "#E6DDF0",
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Avatar
            sx={{ 
              width: 40, 
              height: 40, 
              bgcolor: '#5e4b8b',
              fontSize: '0.8rem'
            }}
          >
            {rsoName.split(' ').map(word => word[0]).join('').substring(0, 2)}
          </Avatar>
          <Box>
            <Typography variant="subtitle2" fontWeight="bold" sx={{ fontSize: '0.85rem' }}>
              {rsoName}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {getRelativeTime(event.start_date)}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 0.5 }}>
          {event.is_paid ? (
            <AttachMoneyIcon color="warning" fontSize="small" />
          ) : (
            <FreeBreakfastIcon color="success" fontSize="small" />
          )}
          <CalendarTodayIcon fontSize="small" />
        </Box>
      </Box>

      {/* Placeholder image area */}
      <Box 
        sx={{ 
          height: 150, 
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999'
        }}
      >
        <Typography variant="body2">Event Image</Typography>
      </Box>

      {/* Content */}
      <CardContent 
        sx={{ 
          backgroundColor: "#E6DDF0", 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: "space-between",
          p: 2
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1.1rem', mb: 1 }}>
            {event.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
            <CalendarTodayIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {formatDate(event.start_date)} {event.start_time_txt && `at ${formatTime(event.start_time_txt)}`}
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2" color="text.secondary">
              {fullLocation}
            </Typography>
          </Box>
          
          <Typography 
            variant="body2" 
            sx={{ 
              mb: 2, 
              display: '-webkit-box', 
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical', 
              overflow: 'hidden', 
              textOverflow: 'ellipsis',
              fontSize: '0.85rem'
            }}
          >
            {event.description}
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Chip 
              label={category} 
              size="small" 
              sx={{ 
                backgroundColor: '#8B7BB8', 
                color: 'white',
                fontSize: '0.7rem'
              }} 
            />
          </Box>
        </Box>
        
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            {event.rsvp_enabled && (
              <Chip 
                label="RSVP Required" 
                size="small" 
                variant="outlined" 
                color="primary"
                sx={{ fontSize: '0.7rem' }}
              />
            )}
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ 
              borderRadius: '62rem',
              backgroundColor: "#8B7BB8",
              '&:hover': { backgroundColor: "#7a6fb0"},
              textTransform: 'none'
            }}
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
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateExpanded, setDateExpanded] = useState(true);
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);
  const [paidFilter, setPaidFilter] = useState('all'); // 'all', 'free', 'paid'
  const [rsvpFilter, setRsvpFilter] = useState('all'); // 'all', 'required', 'not_required'

  const handleDateChange = (date) => {
    if (dateFilters.includes(date)) {
      setDateFilters(dateFilters.filter(d => d !== date));
    } else {
      setDateFilters([...dateFilters, date]);
    }
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredEvents = csvEventData.filter(event => {
    // Search filter
    const matchesSearch = searchQuery.trim() === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rsoMapping[event.rso_id]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const eventCategory = categorizeEvent(event);
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(eventCategory);
    
    // Date filtering
    let matchesDate = true;
    if (dateFilters.length > 0) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      
      const todayStr = today.toDateString();
      const tomorrowStr = tomorrow.toDateString();
      const eventDate = new Date(event.start_date);
      const eventDateStr = eventDate.toDateString();
      
      matchesDate = dateFilters.some(filter => {
        if (filter === 'Today') return eventDateStr === todayStr;
        if (filter === 'Tomorrow') return eventDateStr === tomorrowStr;
        if (filter === 'This Week') {
          const weekFromNow = new Date(today);
          weekFromNow.setDate(today.getDate() + 7);
          return eventDate >= today && eventDate <= weekFromNow;
        }
        return true;
      });
    }
    
    // Payment filter
    const matchesPayment = paidFilter === 'all' || 
      (paidFilter === 'free' && !event.is_paid) ||
      (paidFilter === 'paid' && event.is_paid);
    
    // RSVP filter
    const matchesRSVP = rsvpFilter === 'all' ||
      (rsvpFilter === 'required' && event.rsvp_enabled) ||
      (rsvpFilter === 'not_required' && !event.rsvp_enabled);
    
    return matchesSearch && matchesCategory && matchesDate && matchesPayment && matchesRSVP;
  });

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Search bar */}
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
              fontSize: '0.9rem'
            }} 
            placeholder="Search Events, Organizations, or Descriptions" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </Paper>

        <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
          {/* Filter sidebar */}
          <Box sx={{ 
            width: 220,
            minWidth: 220,
            flexShrink: 0
          }}>
            <Paper sx={{ 
              p: 2.5,
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, fontSize: '1.1rem' }}>
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
                  <Typography variant="subtitle2" fontWeight="600" sx={{ fontSize: '0.9rem', color: '#333' }}>
                    Dates
                  </Typography>
                  {dateExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                </Box>

                {dateExpanded && (
                  <FormGroup>
                    {['Today', 'Tomorrow', 'This Week'].map(date => (
                      <FormControlLabel
                        key={date}
                        control={
                          <Checkbox 
                            size="small"
                            checked={dateFilters.includes(date)} 
                            onChange={() => handleDateChange(date)}
                            sx={{
                              color: '#5e4b8b',
                              '&.Mui-checked': { color: '#5e4b8b' },
                            }}
                          />
                        }
                        label={<Typography variant="body2" sx={{ fontSize: '0.8rem' }}>{date}</Typography>}
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
                  <Typography variant="subtitle2" fontWeight="600" sx={{ fontSize: '0.9rem', color: '#333' }}>
                    Categories
                  </Typography>
                  {categoriesExpanded ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
                </Box>

                {categoriesExpanded && (
                  <FormGroup>
                    {eventCategories.map(category => (
                      <FormControlLabel
                        key={category}
                        control={
                          <Checkbox
                            size="small"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            sx={{
                              color: '#5e4b8b',
                              '&.Mui-checked': { color: '#5e4b8b' },
                            }}
                          />
                        }
                        label={
                          <Typography variant="body2" sx={{ 
                            fontSize: '0.8rem',
                            color: '#555'
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

              {/* Payment Filter */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" fontWeight="600" sx={{ fontSize: '0.9rem', color: '#333', mb: 1 }}>
                  Cost
                </Typography>
                <FormGroup>
                  {[
                    { value: 'all', label: 'All Events' },
                    { value: 'free', label: 'Free Events' },
                    { value: 'paid', label: 'Paid Events' }
                  ].map(option => (
                    <FormControlLabel
                      key={option.value}
                      control={
                        <Checkbox
                          size="small"
                          checked={paidFilter === option.value}
                          onChange={() => setPaidFilter(option.value)}
                          sx={{
                            color: '#5e4b8b',
                            '&.Mui-checked': { color: '#5e4b8b' },
                          }}
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#555' }}>
                          {option.label}
                        </Typography>
                      }
                    />
                  ))}
                </FormGroup>
              </Box>

              {/* RSVP Filter */}
              <Box>
                <Typography variant="subtitle2" fontWeight="600" sx={{ fontSize: '0.9rem', color: '#333', mb: 1 }}>
                  RSVP
                </Typography>
                <FormGroup>
                  {[
                    { value: 'all', label: 'All Events' },
                    { value: 'required', label: 'RSVP Required' },
                    { value: 'not_required', label: 'No RSVP Needed' }
                  ].map(option => (
                    <FormControlLabel
                      key={option.value}
                      control={
                        <Checkbox
                          size="small"
                          checked={rsvpFilter === option.value}
                          onChange={() => setRsvpFilter(option.value)}
                          sx={{
                            color: '#5e4b8b',
                            '&.Mui-checked': { color: '#5e4b8b' },
                          }}
                        />
                      }
                      label={
                        <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#555' }}>
                          {option.label}
                        </Typography>
                      }
                    />
                  ))}
                </FormGroup>
              </Box>
            </Paper>
          </Box>

          {/* Event Grid */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'between', alignItems: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {filteredEvents.map((event) => (
                <Grid item xs={12} sm={6} md={4} key={event.event_id}>
                  <EventCard event={event} />
                </Grid>
              ))}
            </Grid>

            {/* No Results Message */}
            {filteredEvents.length === 0 && (
              <Box sx={{ 
                textAlign: 'center', 
                py: 6,
                color: 'text.secondary'
              }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  No events found
                </Typography>
                <Typography variant="body2">
                  Try adjusting your filters or search term to find more events
                </Typography>
                <Button 
                  variant="outlined" 
                  sx={{ mt: 2 }}
                  onClick={() => {
                    setSearchQuery('');
                    setDateFilters([]);
                    setSelectedCategories([]);
                    setPaidFilter('all');
                    setRsvpFilter('all');
                  }}
                >
                  Clear All Filters
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EventSearch;