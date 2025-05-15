import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { Button, Typography, Box, Stack, useTheme } from '@mui/material';
import EventCard from '../../components/Cards/EventCards';
import RSOPreviewCard from '../../components/Cards/RSOPreviewCards';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Groups2Icon from '@mui/icons-material/Groups2';
import AnnouncementCard from '../../components/Cards/AnnouncementCards';
import event1 from "./assets/event1.png"
import event2 from "./assets/event2.png"
import event3 from "./assets/event3.png"
import event4 from "./assets/event4.png"
import event5 from "./assets/event5.png"
import event6 from "./assets/event6.png"

import logo1 from "./assets/logo1.png"
import logo2 from "./assets/logo2.png"
import logo3 from "./assets/logo3.png"
import logo4 from "./assets/logo4.png"
import logo5 from "./assets/logo5.png"
import logo6 from "./assets/logo6.png"

import feat1 from "./assets/feat1.png"
import feat2 from "./assets/feat2.png"
import feat3 from "./assets/feat3.png"
import feat4 from "./assets/feat4.png"
import feat5 from "./assets/feat5.png"
import feat6 from "./assets/feat6.png"

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
  },
  {
    rsoName: "Traditional Chinese Dance",
    rsoLogo: logo4,
    remainingTime: "in 2 weeks",
    eventImage: event4,
    eventTitle: "TCD 3rd Annual Showcase",
    eventDate: "May 18th, 4:00pm - 6:30pm",
    eventDescr: "Traditional Chinese Dance at UW (TCDUW) was founded in 2021 by five students with a shared passion for Chinese dance. What began as a small group has grown into a big family of 16 dancers from diverse disciplines and backgrounds, all brought",
  },
  {
    rsoName: "Sanskrit Club",
    rsoLogo: logo5,
    remainingTime: "in 8 hours",
    eventImage: event5,
    eventTitle: "Sanskrit Inscriptions by Prof Emeritus Richard Salomon",
    eventDate: "April 30th, 6:00pm - 7:15pm",
    eventDescr: "Talk about Sanskrit Inscriptions",
  },
  {
    rsoName: "Barbell Club at the University of Washington",
    rsoLogo: logo6,
    remainingTime: "in 1 day",
    eventImage: event6,
    eventTitle: "Barbell Club Member Meeting Spring Quarter",
    eventDate: "May 1st, 6:00pm - 7:30pm",
    eventDescr: "Join Us for Our Bi-Weekly Member Meeting! 💪 The Barbell Club at the University of Washington is a welcoming, student-run organization committed to fostering a community for students passionate about weight training and physique building",
  }

];

const announcements = [
    {
        rsoName: 'Hiking Club at UW',
        rsoLogo: logo1,
        infoType: "announcement",
        content: "On Saturday, we explored within the Blanchard State Forest to Lily Lake and Oyster Dome. A light 9+ miles and a “short” warm up on the Chuckanut trail to stick it to the icy roads. Check out our photos!"
    },
    {
        rsoName:'IUGA',
        rsoLogo: logo3,
        infoType: "announcement",
        content: 'Informatics Undergraduates & Master’s students—if you’re graduating this spring, don’t forget to order your stole by 2/22 @ 11:59 PM! There won’t be extras, so don’t miss out! Secure yours now by filling out the form linked here.'
    },
    {
        rsoName:'Hiking Club at UW',
        rsoLogo: logo1,
        infoType: "event",
        content: 'Woodland Park Zoo Urban Hike with The Wildlife Society Saturday. March 15 @ 10am'
    }

];

const features = [
    {
        rso: "Climbing Club at the University of Washington",
        logo: feat1
    },
    {
        rso: "Muse Media",
        logo: feat2
    },
    {
        rso: "Black in Informatics (BINFO)",
        logo: feat3
    },
    {
        rso: "WiCyS UW Chapter",
        logo: feat4
    },
    {
        rso: "Fitted UW",
        logo: feat5
    },
    {
        rso: "Institutional Climate Action UW Chapter",
        logo: feat6
    }

]

export default function EventCarousel() {
    const theme = useTheme();

    return (
        <>
            {/* Card Carousel */}
            <div className="relative w-full overflow-visible">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    initialSlide={1}   
                    centeredSlides={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                {events.map((event, index) => (
                    <SwiperSlide
                    key={index}
                    className="transition-transform"
                    >
                        <EventCard
                        rsoName={event.rsoName}
                        rsoLogo={event.rsoLogo}
                        remainingTime={event.remainingTime}
                        eventImage={event.eventImage}
                        eventTitle={event.eventTitle}
                        eventDate={event.eventDate}
                        eventDescr={event.eventDescr}
                        />
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>

            {/* Middle Buttons */}
            <Box sx={{backgroundColor: '#4b2e83', py: 1.5, display: 'flex', justifyContent: 'center', gap: 4, marginTop: 2, marginBottom: 2 }}>
                <Stack direction="row" spacing={20}>
                    <Link to="/RSOs" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" startIcon={<Groups2Icon />} size="large" sx={{ borderRadius: '62rem', width: '15rem', textTransform: 'none', backgroundColor: theme.palette.custom.surfaceContainerLow, color: theme.palette.secondary.main,'&:hover': {backgroundColor: theme.palette.secondary.light}}}>
                            Find RSOs
                        </Button>
                    </Link>
                    <Link to="/Events" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" startIcon={<CalendarMonthIcon />} size="large" sx={{ borderRadius: '62rem', width: '15rem', textTransform: 'none',  backgroundColor: theme.palette.custom.surfaceContainerLow, color: theme.palette.secondary.main,'&:hover': {backgroundColor: theme.palette.secondary.light}}}>
                            Find Events
                        </Button>
                    </Link>
                </Stack>
            </Box>
            {/* Announcements */}
            <Box sx={{ marginTop: 0, marginBottom: 0, marginLeft: 2, marginRight: 2 }}>
                {announcements.map((announcement, index) => (
                    <Box key={index}>
                        <AnnouncementCard
                            rsoName={announcement.rsoName}
                            rsoLogo={announcement.rsoLogo}
                            content={announcement.content}
                            infoType={announcement.infoType}
                        />
                    </Box>
                 ))}
            </Box>
            
            {/* View More Updates Central Button */}
            <Box sx={{py: 1.5, display: 'flex', justifyContent: 'center', gap: 4}}>
                <Link to="/SignIn" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" sx={{ borderRadius: '62rem', backgroundColor: '#5e4b8b', '&:hover': { backgroundColor: '#4b3c6f' }, textTransform: 'none', width: '15rem', mt: 6, mb: 6}}>
                        More Updates
                    </Button>
                </Link>
            </Box>
            {/* Featured RSO Preview */}
            <Typography variant="h4" fontWeight={900} sx={{ ml: 6, color: theme.palette.custom.primaryContainer, mb: 6 }}>Featured RSO Preview</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                {features.map((features, index) => (
                    <Box
                        key={index}
                        sx={{
                            width: '30%',
                            minWidth: '250px',
                            margin: '1%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <RSOPreviewCard 
                            rso={features.rso}
                            logo={features.logo}
                        />
                    </Box>   
                ))}
            </Box>

            {/* View More RSOs Central Button */}
            <Box sx={{py: 1.5, display: 'flex', justifyContent: 'center', gap: 4, mt: 6}}>
                <Link to="/RSOs" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" sx={{ borderRadius: '62rem', backgroundColor: '#5e4b8b', '&:hover': { backgroundColor: '#4b3c6f' }, textTransform: 'none', width: '15rem'}}>
                        View More
                    </Button>
                </Link>
            </Box>
        </>
      );
  }