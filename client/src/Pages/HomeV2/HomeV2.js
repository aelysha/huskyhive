import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { Button, AppBar, Toolbar, Typography, Card, CardContent, Box, CardMedia, Avatar, Stack, useTheme } from '@mui/material';
import EventCard from '../../components/Cards/EventCards';
import RSOPreviewCard from '../../components/Cards/RSOPreviewCards';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Groups2Icon from '@mui/icons-material/Groups2';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const events = [
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  },
  {
    image: '/logo512.png',
    title: 'DECEPTACON',
    date: 'Feb 22, 1–5pm',
    description: 'An all-afternoon event highlighting the UW and Seattle fashion scenes...',
    logo: '/logo512.png',
  }
];

const announcements = [
    {
        rso: 'Hiking Club at UW',
        logo: '/logo512.png',
        content:'On Saturday, we explored within the Blanchard State Forest to Lily Lake and Oyster Dome...'
    },
    {
        rso:'IUGA',
        logo:'/logo512.png',
        content:'Informatics Undergraduate students-- if youre graduating this spring, dont forget to order your stole by 2/22...'
    }
];

const AnnouncementStrip = () => {
    const theme = useTheme();
    return (
        <Box sx={{ marginTop: 0, marginBottom: 0, marginLeft: 2, marginRight: 2}} >
            <Card elevation={0} sx={{ backgroundColor: theme.palette.background.default }}>
                <CardContent> 
                    <Box sx={{display: 'flex',justifyContent: 'space-between',alignItems: 'center',p: 0.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar src="logo512.png" alt="MESH UW" sx={{ width: 50, height: 50 }}/>
                            <Box>
                                <Typography variant="h5">Welcome</Typography>
                                <Typography variant="body1">This is your custom-themed page.</Typography>
                            </Box>
                        </Box>
                        <Link to="/RSOs" style={{ textDecoration: 'none' }}> 
                            <Button sx={{ borderRadius: '62rem'}}>
                                <ArrowForwardIcon />
                            </Button>
                        </Link>
                    </ Box>
                </CardContent>
            </Card>
            <Box sx={{ height: '0.025rem', width: '100%', backgroundColor: 'black'}}/>
        </Box>
    );
};

export default function EventCarousel() {
    const theme = useTheme();

    return (
        <>
            {/* Card Carousel */}
            <div className="relative w-full overflow-visible">
                <Swiper
                slidesPerView="3"
                initialSlide={2}
                centeredSlides={true}
                spaceBetween={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
                >
                {events.map((event, index) => (
                    <SwiperSlide
                    key={index}
                    style={{
                        width: '33.33%', // 2/3 of the container width
                    }}
                    className="transition-transform"
                    >
                        <EventCard />
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
            <AnnouncementStrip />
            <AnnouncementStrip />

            {/* View More Updates Central Button */}
            <Box sx={{py: 1.5, display: 'flex', justifyContent: 'center', gap: 4}}>
                <Link to="/Profile" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" sx={{ borderRadius: '62rem', backgroundColor: '#5e4b8b', '&:hover': { backgroundColor: '#4b3c6f' }, textTransform: 'none', width: '15rem'}}>
                        More Updates
                    </Button>
                </Link>
            </Box>
            {/* Featured RSO Preview */}
            <Typography variant="h4">Featured RSO Preview</Typography>
            <RSOPreviewCard />

            {/* View More RSOs Central Button */}
            <Box sx={{py: 1.5, display: 'flex', justifyContent: 'center', gap: 4}}>
                <Link to="/RSOs" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" sx={{ borderRadius: '62rem', backgroundColor: '#5e4b8b', '&:hover': { backgroundColor: '#4b3c6f' }, textTransform: 'none', width: '15rem'}}>
                        View More
                    </Button>
                </Link>
            </Box>
        </>
      );
  }