import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { Button, ButtonGroup, Divider, Typography, Box, Stack, useTheme, Avatar, IconButton, Card } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Groups2Icon from '@mui/icons-material/Groups2';
import EventCard from '../../components/Cards/EventCards';
import AnnouncementCard2 from '../../components/Cards/AnnouncementCards2';
import OfficerCard from '../../components/Cards/OfficerCards';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';

//TO DELETE CAUSE DUMMY DATA
import event1 from "../HomeV2/assets/event1.png"
import event2 from "../HomeV2/assets/event2.png"
import event3 from "../HomeV2/assets/event3.png"
import event4 from "../HomeV2/assets/event4.png"
import event5 from "../HomeV2/assets/event5.png"
import event6 from "../HomeV2/assets/event6.png"

import logo1 from "../HomeV2/assets/logo1.png"
import logo2 from "../HomeV2/assets/logo2.png"
import logo3 from "../HomeV2/assets/logo3.png"
import logo4 from "../HomeV2/assets/logo4.png"
import logo5 from "../HomeV2/assets/logo5.png"
import logo6 from "../HomeV2/assets/logo6.png"

const events = [
  {
    rsoName: "Hiking Club at UW",
    rsoLogo: logo1,
    remainingTime: "in 1 week",
    eventImage: event1,
    eventTitle: "Woodland Park Zoo Urban Hike",
    eventDate: "February 23rd, 10:00 am",
    eventDescr: "The Wildlife Society and Hiking Club at UW are joining forces for an Urban Hike to Woodland Park Zoo! We’ll be gathering for wildlife and conservation convos as we explore the zoo together on Sunday February 23rd, rain or shine. Those walking",
  },
  {
    rsoName: "MESH UW",
    rsoLogo: logo2,
    remainingTime: "in 1 day",
    eventImage: event2,
    eventTitle: "PRISMATIC",
    eventDate: "May 17th, 4:00pm - 7:00pm",
    eventDescr: "We invite you to join us for our annual fashion show! Taking place May 17th from 4-7PM at the Nippon Kan Theatre, this is an exhibition of the talents and creativity of Seattle's own fashion designers.",
  },
  {
    rsoName: "Informatics Undergraduate Association",
    rsoLogo: logo3,
    remainingTime: "in 2 days",
    eventImage: event3,
    eventTitle: "IUGA Intern Panel",
    eventDate: "February 13th, 6:00pm - 7:30pm",
    eventDescr: "Hear about iSchool students’ internship experiences at top companies. Gain insights & connect with peers!",
  }
];

const announcements = [
  {
    rsoName: "Hiking Club at UW",
    rsoLogo: logo1,
    timePosted: "in 1 week",
    announcementImage: event4,
    announcementTitle: "Woodland Park Zoo Urban Hike",
    announcementDate: "February 23rd, 10:00 am",
    announcementDescr: "The Wildlife Society and Hiking Club at UW are joining forces for an Urban Hike to Woodland Park Zoo! We’ll be gathering for wildlife and conservation convos as we explore the zoo together on Sunday February 23rd, rain or shine. Those walking",
  },
  {
    rsoName: "MESH UW",
    rsoLogo: logo2,
    timePosted: "in 1 day",
    announcementImage: event5,
    announcementTitle: "PRISMATIC",
    announcementDate: "May 17th, 4:00pm - 7:00pm",
    announcementDescr: "We invite you to join us for our annual fashion show! Taking place May 17th from 4-7PM at the Nippon Kan Theatre, this is an exhibition of the talents and creativity of Seattle's own fashion designers.",
  },
  {
    rsoName: "Informatics Undergraduate Association",
    rsoLogo: logo3,
    timePosted: "in 2 days",
    announcementImage: event6,
    announcementTitle: "IUGA Intern Panel",
    announcementDate: "February 13th, 6:00pm - 7:30pm",
    announcementDescr: "Hear about iSchool students’ internship experiences at top companies. Gain insights & connect with peers!",
  },
  {
    rsoName: "Traditional Chinese Dance",
    rsoLogo: logo4,
    timePosted: "in 2 weeks",
    announcementImage: event4,
    announcementTitle: "TCD 3rd Annual Showcase",
    announcementDate: "May 18th, 4:00pm - 6:30pm",
    announcementDescr: "Traditional Chinese Dance at UW (TCDUW) was founded in 2021 by five students with a shared passion for Chinese dance. What began as a small group has grown into a big family of 16 dancers from diverse disciplines and backgrounds, all brought",
  }
];

const officers = [
  {
    officerImage: event1,
    officerName: 'Bobbington the Third',
    officerPosition: "King Bob",
    officerEmail: "bob@uw.edu",
  },
  {
    officerImage: event1,
    officerName: 'Bobbington the Third',
    officerPosition: "King Bob",
    officerEmail: "bob@uw.edu",
  },
  {
    officerImage: event1,
    officerName: 'Bobbington the Third',
    officerPosition: "King Bob",
    officerEmail: "bob@uw.edu"
  },
  {
    officerImage: event1,
    officerName: 'Bobbington the Third',
    officerPosition: "King Bob",
    officerEmail: "bob@uw.edu"
  },
  {
    officerImage: event1,
    officerName: 'Bobbington the Third',
    officerPosition: "King Bob",
    officerEmail: "bob@uw.edu"
  }
];

const interest_tags = ['fashion', 'design', 'creative', 'runway', 'clothing']

function Event(props) {
    const theme = useTheme();
    
        return (
            <>
                {/* RSO Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.palette.custom.inverseSurface, height: 425 }}>
                    <Box sx={{
                            width: '47.5%',
                            height: 400,
                            backgroundColor: 'rgb(123, 117, 130)',
                            borderTopRightRadius: '1rem',
                            borderBottomRightRadius: '1rem',
                            borderWidth: 3,
                            borderStyle: 'solid',
                            borderColor: theme.palette.custom.outline,
                            borderLeft: 'none'
                          }}>
                    <img src={announcements[0].announcementImage} alt='' style={{ objectFit: 'cover', width: '100%', height:'100%', borderTopRightRadius: '1rem', borderBottomRightRadius: '1rem' }}/>
                  </Box>
                  <Box
                        sx={{
                            width: '47.5%',
                            height: 400,
                            backgroundColor: theme.palette.background.default,
                            borderTopLeftRadius: '1rem',
                            borderBottomLeftRadius: '1rem',
                            borderWidth: 3,
                            borderStyle: 'solid',
                            borderColor: theme.palette.custom.outline,
                            borderRight: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            padding: 2,
                            paddingTop: 5,
                            gap: 2,
                        }}
                        >
                        {/* Title */}
                        <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                            DECEPTACON
                        </Typography>

                        {/* Event Card */}
                        <Box
                            sx={{
                            borderRadius: '1.5rem',
                            padding: 2,
                            boxShadow: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            }}
                        >
                            {/* Host */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar src={announcements[0].rsoLogo} alt="MESH" />
                            <Box
                                sx={{
                                backgroundColor: theme.palette.custom.cardContainer,
                                paddingX: 2,
                                paddingY: 0.5,
                                borderRadius: '1rem',
                                }}
                            >
                                <Typography variant="body1" >
                                Event hosted by <b>MESH UW</b>
                                </Typography>
                            </Box>
                            </Box>

                            {/* Details */}
                            <Box
                            sx={{
                                backgroundColor: theme.palette.custom.cardContainer,
                                borderRadius: '2rem',
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 1.5,
                            }}
                            >
                                {/* Date/Time */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconButton sx={{ color: theme.palette.common.black, '&:hover': { color: theme.palette.common.white, backgroundColor: theme.palette.secondary.main } }}>
                                      <CalendarMonthIcon fontSize="medium"/>
                                    </IconButton>
                                    <Typography>
                                    Saturday, February 22, 1:00pm – 5:00pm
                                    </Typography>
                                </Box>

                                {/* Location */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconButton sx={{ color: 'black', '&:hover': { color: 'white', backgroundColor: '#5e4b8b' } }}>
                                      <LocationOnIcon fontSize="medium"/>
                                    </IconButton>
                                    <Typography>HUB 211</Typography>
                                </Box>

                                {/* Price */}
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <IconButton sx={{ color: 'black', '&:hover': { color: 'white', backgroundColor: '#5e4b8b' } }}>
                                      <CreditCardIcon fontSize="medium"/>
                                    </IconButton>
                                    <Typography>$5–$10 (sliding scale) to MESH-UW</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {/* RSVP */}
                <ButtonGroup disableElevation fullWidth sx={{ overflow: 'hidden', width: '95%', margin: 2 }}>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '62rem',
                            paddingX: 3,
                            backgroundColor: theme.palette.primary.main,
                            '&:hover': {
                            backgroundColor: theme.palette.custom.cardContainer,
                            color: theme.palette.common.black
                            }
                        }}
                        >
                        + RSVP
                    </Button>

                    <Button
                        disableRipple
                        sx={{
                            pointerEvents: 'none', // makes it non-clickable
                            backgroundColor: 'transparent',
                            color: 'text.primary',
                            '&:hover': {
                            backgroundColor: 'transparent', // disables hover effect
                            },
                            borderRadius: '62rem',
                            paddingX: 3,
                        }}
                        >
                        650 Members
                    </Button>
                </ButtonGroup>
                <Divider sx={{ my: 2 }} />
                {/* RSO Hook and Description */}
                <Box sx={{mx: 5}}>
                  <Typography variant='h5'>You are cordially invited to DECEPTACON 🎭</Typography>
                  <Box sx={{ width: '90%', mx: 'auto', my: 2 }}>
                    <Divider />
                  </Box>
                  <Typography variant='h6'>An all-afternoon event which highlights the UW and Seattle fashion scenes, in collaboration with many on and off campus organizations.</Typography>
                  <Typography variant='h6'>There will be photo booths available, as well as a fashion walk in collaboration with different cultural clubs from UW. Organizations that are tabling will be providing a mix of workshops, fashion-related information, and vending. We will also have panelists and performers joining us on stage</Typography>
                  <Typography variant='h6'>RSVP today! Tickets are on a sliding scale of $5-10, Venmo MESH-UW with your full name.</Typography>
                </Box>
                <Divider sx={{ my: 2 }} />
                {/* RSO Events */}
                <Box sx={{mx: 5}}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Typography variant='h5'>View MESH UW's Events</Typography>
                        <Link to="/RSOs" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" size="large" sx={{ borderRadius: '62rem', backgroundColor: theme.palette.secondary.main, '&:hover': { backgroundColor: theme.palette.primary.dark  }, textTransform: 'none', width: '10rem'}}>
                                View All Events
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: 2 }}>
                      {events.slice(0,3).map((event, index) => (
                        <Box key={index} sx={{ flex: '0 0 auto' }}>
                          <EventCard
                            rsoName={event.rsoName}
                            rsoLogo={event.rsoLogo}
                            remainingTime={event.remainingTime}
                            eventImage={event.eventImage}
                            eventTitle={event.eventTitle}
                            eventDate={event.eventDate}
                            eventDescr={event.eventDescr}
                          />
                        </Box>
                      ))}
                    </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
                {/* RSO Announcements */}
                <Typography variant='h5' sx={{mx: 5}}>View MESH UW's Recent Announcements</Typography>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: 2 }}>
                      {announcements.slice(0,3).map((announcement, index) => (
                        <Box key={index} sx={{ flex: '0 0 auto' }}>
                          <AnnouncementCard2
                            rsoName={announcement.rsoName}
                            rsoLogo={announcement.rsoLogo}
                            timePosted={announcement.timePosted}
                            announcementImage={announcement.announcementImage}
                            announcementTitle={announcement.announcementTitle}
                            announcementDate={announcement.announcementDate}
                            announcementDescr={announcement.announcementDescr}
                          />
                        </Box>
                      ))}
                    </Box>
                </Box>
            </>
        );
}

export default Event; 