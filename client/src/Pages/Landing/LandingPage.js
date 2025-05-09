import React, { useState, useEffect } from 'react';
import { Button, Typography, IconButton, Box, Container, useTheme, Paper } from '@mui/material';
import Groups2Icon from '@mui/icons-material/Groups2';
import EventIcon from '@mui/icons-material/Event';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom'; 


// TODO: Move to Supabase
import bg1 from './bg1.jpg';
import bg2 from './bg2.jpg';
import bg3 from './bg3.jpg';
import bg4 from './bg4.jpg';
import bg5 from './bg5.jpg';
import bg6 from './bg6.jpg';
import rsocombs from './rsocombs.png';
import eventcombs from './eventscombs.png'

// TODO: Change background image names 
const bgImages = [bg1, bg2, bg3, bg4, bg5, bg6];
const terms = ["COMMUNITY", "CRAFT", "CREW", "CAUSE", "CIRCLE", "CALLING"]; // guarantee equal length to images

const LandingPage = () => {
  // set variables for background transitions
  const [backgroundIndex, setBackgroundIndex] = useState(0); // image number
  const [fadeIn, setFadeIn] = useState(true); // when to fade text

  const theme = useTheme();
  

  // scrolling on arrow
  const scrollDown = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false); // don't fade until bg change
      setTimeout(() => {
        setBackgroundIndex((i) => (i + 1) % bgImages.length); // loop 1-6
        setFadeIn(true); // fade with change
      }, 1000); // 1s = background change
    }, 
    6000);
  
    return () => clearInterval(interval);
  }, []); // memory clearing
  

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh' }}> 

      {/* Starting Background Box */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh', // fill screen
          width: '100%', // fill screen
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'        
        }}
      >
        
      {/* Image Slider */}
      <Box
        sx={{
          position: 'absolute', // to place on top of prior box
          top: 0, // 0s to span area
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${bgImages[backgroundIndex]})`, // grab img url from arr
          backgroundSize: 'cover', // to span out img regardless of sizing
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out', // dynamic changing of bg
          zIndex: 0, // send to back to place dark filter
            '&:after': {
              content: '""', // empty
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(39, 39, 39, 0.5)',  // dark cover
              zIndex: 1, // one level a bit higher than img
            }
          }
        }
      />
        
      {/* Starting Hook Text */}
      <Container maxWidth="lg" 
        sx={{ 
          position: 'relative', 
          zIndex: 1 
      }}>

      <Typography 
        variant="h1" 
        sx={{ 
          color: 'white', 
          fontWeight: '900',
          mb: 1,
          opacity: Number(fadeIn), // 0 or 1
          transition: 'opacity 1s ease-in-out',
        }}
      >
        FOR YOUR {terms[backgroundIndex]}. 
        
      </Typography>

      <Typography 
        variant="h1" 
        sx={{ 
          color: 'white', 
          fontWeight: '900',
          mb: 4
        }}
      >
        FOR YOUR CLUBS.
      </Typography>

        <Box mt={4} display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        <Link to="/RSOs" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained" // filled button
            size="large"
            startIcon={<Groups2Icon />} // people icon
            sx={{ 
              backgroundColor: theme.palette.primary.dark,
              width: "20rem", // enlargen 
              height: "4rem",
              color: theme.palette.primary.contrastText,
              borderRadius: 28,
              fontSize: "1.5rem",
              px: 4,
              py: 2,
              marginRight: 10,
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
              }, 
              textTransform: 'none'
            }}
          >
            Find RSOs
          </Button>
          </Link>
          
          <Link to="/Events" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<EventIcon />}
            sx={{ 
              backgroundColor: theme.palette.primary.dark,
              width: "20rem",
              height: "4rem",
              color: theme.palette.primary.contrastText,
              borderRadius: 20,
              fontSize: "1.5rem",
              px: 4, // left and right padding
              py: 2, // up and down padding
              marginLeft: 10,
              '&:hover': {
                backgroundColor: theme.palette.primary.main, // darken on hover
              },
              textTransform: 'none'
            }}
          > 
            Find Events
          </Button>
          </Link>
        </Box>
        </Container>
        
        {/* Arrow Down */}
        <Box 
          position="absolute" 
          bottom={200} // larger = moving it up from image container
          left={0} 
          right={0} 
          display="flex" 
          justifyContent="center"
        >
          <IconButton 
            onClick={scrollDown}
            sx={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                backgroundColor: theme.palette.common.white,
              },
            }}
          >
          <KeyboardArrowDownIcon />
          </IconButton>

        </Box>
      </Box>

      {/* General Info */}
      <Box id="main-content">
      {/* Row 1 */}
        <Box 
          sx={{
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
          }}
        > 
      <Box 
        sx={{ 
          flex: 1, 
          minWidth: 300, 
          ml:6 // spacing from edge
        }}>
        <Typography variant="h3" 
          sx={{ 
            color: theme.palette.primary.dark, 
            mb: 2,
            fontWeight: 900,
        }}>
          BUILD CONNECTIONS.
        </Typography>
        <Typography variant="body1" 
          sx={{ 
            color: theme.palette.text.primary, 
            fontSize: '1.5em' 
          }}>
          Filler text about RSOs, connections and the good vibes they bring. Hive of activity.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
    </Box>
    <Box 
      sx={{ 
        flex: 1, 
        display: "flex", 
        justifyContent: "flex-end", 
        minWidth: 300 // to-do: how to cut it off of page
      }}>
        <img 
          src={rsocombs}
          alt="A honeycomb structure filled with RSO logos" 
          style={{ 
            width: '100%', 
            maxWidth: 300, 
            height: 'auto' }}
        />  
    </Box>
  </Box>

      {/* Row 2 */}
      <Box 
          sx={{
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
          }}
        > 
      <Box 
        sx={{ 
          flex: 1, 
          display: "flex", 
          justifyContent: "flex-start", 
          minWidth: 300 
        }}>
        <img 
          src={eventcombs}
          alt="A honeycomb structure filled with RSO board members and events" 
          style={{ 
            width: '100%', 
            maxWidth: 300, 
            height: 'auto' }}
        />  
    </Box>
    <Box 
        sx={{ 
          flex: 1, 
          minWidth: 300, 
          mr:6 // spacing from edge
        }}>
        <Typography variant="h3" 
          sx={{ 
            color: theme.palette.primary.dark, 
            mb: 2,
            fontWeight: 900,
            textAlign: 'right'
        }}>
          FIND EVENTS.
        </Typography>
        <Typography variant="body1" 
          sx={{ 
            color: theme.palette.text.primary, 
            fontSize: '1.5em',
            textAlign: 'right'
          }}>
          Filler text about events and how fun they are yay! 
          Also outline functionalities about GMaps/GCal/payment integration info. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        </Typography>
      </Box>
    </Box>

        {/* Row 3 */}
        <Container maxWidth="md" 
          sx={{ 
            mb: 10, 
            textAlign: 'center' 
          }}>
          <Typography 
            variant="h3" 
            sx={{ 
              color: theme.palette.primary.dark,
              mb: 2,
              fontWeight: 900
            }}
          >
            WHAT IS THIS?
          </Typography>
          <Typography variant="body1" 
            sx={{ 
              mb: 6, 
              color: theme.palette.text.primary,
              fontSize: '1.5em'
            }}>
            As all UW students know, one of the best things about campus are the clubs that call it home. 
            HuskyHive is an online directory for all Registered Student Organizations at UW, where students 
            can find new clubs to get involved with and new experiences to explore in their time on campus.
          </Typography>
        </Container>
        
        <Container maxWidth="lg">
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                backgroundColor: theme.palette.custom.onSecondaryContainer,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                mb: 4
              }}
            >
              <Box>
                <InfoIcon
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  mr: 2, 
                  fontSize: '2rem'
                }} />
              </Box>
              <Typography variant="body2" 
                sx={{ 
                  color: theme.palette.primary.contrastText, 
                  fontSize: '1.25rem' 
                }}>
                HuskyHive is a redesign of UW's RSO directory as part of an informatics capstone project. This site is not an official representation of any university program or department.
              </Typography>
            </Paper>
          </Container>
          
          {/* Sign In */}
          <Container maxWidth="md" 
          sx={{ 
            mb: 4, 
            textAlign: 'center' 
          }}>
          <Link to="/SignIn" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<LoginIcon />}
            sx={{ 
              backgroundColor: theme.palette.primary.dark,
              width: "20rem",
              height: "4rem",
              color: theme.palette.primary.contrastText,
              borderRadius: 20,
              fontSize: "1.5rem",
              px: 4, // left and right padding
              py: 2, // up and down padding
              '&:hover': {
                backgroundColor: theme.palette.primary.main, // darken on hover
              },
              textTransform: 'none'
            }}
          > 
            Sign In
          </Button>
          </Link>
          </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;