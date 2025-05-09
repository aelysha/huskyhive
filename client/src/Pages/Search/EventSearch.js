import React, { useState } from 'react';
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
  CardContent
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Link } from 'react-router-dom';
import EventCard from '../../components/Cards/SearchEventCard';  // Imported EventCard


export const eventData = [
    {
      id: 1,
      title: "Sanskrit Speaker Series",
      subtitle: "Sanskrit Inscriptions by Prof Emeritus Richard Salomon",
      details: "4/30 at 6:00pm Sanskrit Inscriptions\nby Prof Emeritus Richard Salomon\n\n5/13 at 6:00 pm The Bhagavad Gita",
      rsoName: "Sanskrit Club",
      rsoLogo: "/api/placeholder/60/60", 
      remainingTime: "in 8 hours",
      image: "/api/placeholder/400/200", 
      categories: ["Club Meeting", "Cultural", "Guest Lecturer or Speaker"],
      date: "April 30, 2025"
    },
    {
      id: 2,
      title: "DECEPTACON",
      subtitle: "",
      details: "MESH UW presents DECEPTACON, a celebration of fashion and art.",
      rsoName: "MESH UW",
      rsoLogo: "/api/placeholder/60/60", 
      remainingTime: "in 2 days",
      image: "/api/placeholder/400/200", 
      categories: ["Performance", "Cultural"],
      date: "May 11, 2025"
    },
    {
      id: 3,
      title: "TCD 3rd Annual Showcase",
      subtitle: "",
      details: "Traditional Chinese Dance 3rd Annual Spring Showcase",
      rsoName: "Traditional Chinese Dance",
      rsoLogo: "/api/placeholder/60/60", 
      remainingTime: "in 2 weeks",
      image: "/api/placeholder/400/200", 
      categories: ["Performance", "Cultural"],
      date: "May 23, 2025"
    },
    {
      id: 4,
      title: "ARCUW Monthly Club Meeting",
      subtitle: "",
      details: "Amateur Radio Club at UW monthly meeting to discuss radio operations and upcoming events.",
      rsoName: "Amateur Radio Club at UW",
      rsoLogo: "/api/placeholder/60/60", 
      remainingTime: "in 2 weeks",
      image: "/api/placeholder/400/200", 
      categories: ["Club Meeting"],
      date: "May 25, 2025"
    },
    {
      id: 5,
      title: "29th Annual Khmer New Year Show",
      subtitle: "Illuminating the Seasons of Cambodia",
      details: "Join us for the 29th Annual Khmer New Year Show - a celebration of Cambodian culture and traditions.",
      rsoName: "Khmer Student Association",
      rsoLogo: "/api/placeholder/60/60", 
      remainingTime: "in 2 days",
      image: "/api/placeholder/400/200", 
      categories: ["Cultural", "Performance", "Fair or Festival"],
      date: "May 11, 2025"
    },
    {
      id: 6,
      title: "Barbell Club Member Meeting Spring Quarter",
      subtitle: "",
      details: "GENERAL MEETING\nJOIN US",
      rsoName: "Barbell Club at the University",
      rsoLogo: "/api/placeholder/60/60", 
      remainingTime: "in 1 day",
      image: "/api/placeholder/400/200", 
      categories: ["Club Meeting"],
      date: "May 10, 2025"
    }
  ];

export const eventTypes = [
  "Club Meeting",
  "Cultural",
  "Fair or Festival",
  "Fundraiser",
  "Guest Lecturer or Speaker",
  "Performance",
  "Presentation or Workshop"
];

const EventSearch = () => {
    const [dateFilters, setDateFilters] = useState(['Today']);
    const [selectedTypes, setSelectedTypes] = useState(['Club Meeting', 'Cultural', 'Guest Lecturer or Speaker']);
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
  
    const filteredEvents = eventData.filter(event => {
      return selectedTypes.some(type => event.categories.includes(type));
    });
  
    return (
      <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>
        {/* Search bar */}
        <Container maxWidth="xl" sx={{ mt: 3, mb: 4 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            bgcolor: 'white', 
            borderRadius: 50, 
            px: 2, 
            boxShadow: 1,
            mb: 3 
          }}>
            <SearchIcon sx={{ color: 'gray', mr: 1 }} />
            <InputBase
              placeholder="Search Events"
              fullWidth
              sx={{ py: 1 }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Box>
  
          <Grid container spacing={3}>
            {/* Filter sidebar */}
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: '#4d4d4d' }}>
                  Filters
                </Typography>
                
                {/* Date section */}
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
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4d4d4d' }}>
                      Dates
                    </Typography>
                    {dateExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Box>
  
                  {dateExpanded && (
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={dateFilters.includes('Today')} 
                            onChange={() => handleDateChange('Today')}
                            sx={{
                              color: '#5e4b8b',
                              '&.Mui-checked': { color: '#5e4b8b' },
                            }}
                          />
                        }
                        label="Today"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={dateFilters.includes('Tomorrow')} 
                            onChange={() => handleDateChange('Tomorrow')}
                            sx={{
                              color: '#5e4b8b',
                              '&.Mui-checked': { color: '#5e4b8b' },
                            }}
                          />
                        }
                        label="Tomorrow"
                      />
                      <Box 
                        component="input" 
                        type="text"
                        placeholder="Enter custom date..."
                        sx={{ 
                          mt: 1, 
                          p: 1.5, 
                          width: '100%', 
                          borderRadius: 50, 
                          border: '1px solid #d0d0d0',
                          outline: 'none',
                          '&:focus': { borderColor: '#5e4b8b' }
                        }}
                      />
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
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#4d4d4d' }}>
                      Event Types
                    </Typography>
                    {eventTypesExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </Box>
  
                  {eventTypesExpanded && (
                    <FormGroup>
                      {eventTypes.map(type => (
                        <FormControlLabel
                          key={type}
                          control={
                            <Checkbox
                              checked={selectedTypes.includes(type)}
                              onChange={() => handleTypeChange(type)}
                              sx={{
                                color: '#5e4b8b',
                                '&.Mui-checked': { color: '#5e4b8b' },
                              }}
                            />
                          }
                          label={type}
                        />
                      ))}
                    </FormGroup>
                  )}
                </Box>
              </Paper>
            </Grid>
  
            {/* Event Grid */}
            <Grid item xs={12} md={9}>
              <Grid container spacing={3}>
                {filteredEvents.map((event) => (
                  <Grid item xs={12} sm={6} md={4} key={event.id}>
                    <EventCard event={event} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
};

export default EventSearch;
