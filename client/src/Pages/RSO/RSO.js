import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import { Button, ButtonGroup, Divider, Typography, Box, Stack, useTheme, Avatar, IconButton, Card } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Groups2Icon from '@mui/icons-material/Groups2';
import EventCardMESH from '../../components/Cards/EventCardsMESH';
import AnnouncementCardMESH from '../../components/Cards/AnnouncementCardsMESH';
import OfficerCardMESH from '../../components/Cards/OfficerCardsMESH';

//TO DELETE CAUSE DUMMY DATA
import event1 from "../HomeV2/assets/event1.png"
import event2 from "../HomeV2/assets/event2.png"
import event3 from "../HomeV2/assets/event3.png"
import event4 from "../HomeV2/assets/event4.png"
import event5 from "../HomeV2/assets/event5.png"
import event6 from "../HomeV2/assets/event6.png"
import event7 from "../HomeV2/assets/event7.png"
import event8 from "../HomeV2/assets/event8.png"

import logo1 from "../HomeV2/assets/logo1.png"
import logo2 from "../HomeV2/assets/logo2.png"
import logo3 from "../HomeV2/assets/logo3.png"
import logo4 from "../HomeV2/assets/logo4.png"
import logo5 from "../HomeV2/assets/logo5.png"
import logo6 from "../HomeV2/assets/logo6.png"

// const getOfficerImage = (name) => {
//   const filename = name.toLowerCase().replace(/\s+/g, '-') + '.jpg'; // "Jane Doe" => "jane-doe.jpg"
//   return `/officer-images/${filename}`;
// };


const events = [
  {
    rsoName: "MESH UW",
    rsoLogo: logo2,
    remainingTime: "in 1 week",
    eventImage: event8,
    eventTitle: "Fashion Designing Workshop",
    eventDate: "February 23rd, 10:00 am",
    eventDescr: "Ever wanted to design your own runway collection? In collaboration with our friends at @eyelet.creative , we’re hosting a workshop that teaches you the basics of putting together a fashion collection, from concepts to sketches! Join us this Monday at the HUB, signups are in our bio ✏️",
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
    rsoName: "MESH UW",
    rsoLogo: logo2,
    remainingTime: "in 2 days",
    eventImage: event7,
    eventTitle: "Deceptacon",
    eventDate: "February 22nd, 1:00pm - 5:00pm",
    eventDescr: "An all-afternoon event which highlights the UW and Seattle fashion scenes, in collaboration with many on and off campus organizations. There will be photo booths available, as well as a fashion walk in collaboration with different cultural clubs from UW. Organizations that are tabling will be providing a mix of workshops, fashion-related information, and vending. We will also have panelists and performers joining us on stage"
  }
];

const announcements = [
  {
    rsoName: "MESH UW",
    rsoLogo: logo2,
    timePosted: "1 week ago",
    announcementImage: event2,
    announcementTitle: "Upcoming Event",
    announcementDate: "February 23rd, 10:00 am",
    announcementDescr: "Prismatic is coming up and we want to invite everyone to come and support the event. From volunteering to watching, we'd appreciate the support!",
  },
  {
    rsoName: "MESH UW",
    rsoLogo: logo2,
    timePosted: "2 weeks ago",
    announcementImage: event7,
    announcementTitle: "Deceptacon",
    announcementDate: "May 17th, 4:00pm - 7:00pm",
    announcementDescr: "Thank you everyone who came out for Deceptacon! It was a great event that couldn't have been done without all of you!",
  },
  {
    rsoName: "MESH UW",
    rsoLogo: logo2,
    timePosted: "2 days ago",
    announcementImage: event2,
    announcementTitle: "Prismatic Countdown",
    announcementDate: "February 13th, 6:00pm - 7:30pm",
    announcementDescr: "T-Minus two days until PRISMATIC. We got this guys, make sure to RSVP and pay!",
  }
];

//const interest_tags = ['fashion', 'design', 'creative', 'runway', 'clothing']

function RSO(props) {
    const theme = useTheme();

    const { rso_name } = useParams();
    const [rso, setRso] = useState(null);
    const [loading, setLoading] = useState(true);
    const [joined, setJoined] = useState(false);
  const [count, setCount] = useState(650);  // starting members count



    useEffect(() => {
      const fetchRso = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/rsos/${rso_name}`);
          console.log('Raw fetch response:', res);
          const data = await res.json();
          console.log("RSO data from server:", data); 
          setRso(data.rso);
        } catch (err) {
          console.error('Failed to fetch rso:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchRso();
    }, [rso_name]);

    if (loading) return <p>Loading...</p>;
    if (!rso) return <p>RSO not found</p>;

    const board_members = rso.board_members;

    const interest_tags = rso.interest_tags;
    
    const social_media = rso.social_media;

    return (
        <>
            {/* RSO Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.palette.custom.inverseSurface, height: 425 }}>
              <Box sx={{
                        width: '47.5%',
                        height: 400,
                        backgroundColor: theme.palette.background.default,
                        borderTopRightRadius: '1rem',
                        borderBottomRightRadius: '1rem',
                        borderWidth: 3,
                        borderStyle: 'solid',
                        borderColor: 'rgb(123, 117, 130)',
                        borderLeft: 'none',
                        justifyContent: 'space-between',
                        padding: 1
                        
                      }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                  <Avatar src={"/logos/mesh-logo.jpg"} alt="MESH" sx={{ width: 100, height: 100 }} />
                  <Stack width='60%'>
                    <Typography 
                      variant="h4" 
                      fontWeight={900} 
                      sx={{ lineHeight: 1.1, py: .2 }}
                    >
                      {rso.rso_name}
                    </Typography>
                   <ButtonGroup disableElevation fullWidth sx={{ overflow: 'hidden', width: '95%' }}>
                      <Button
                        disableRipple
                        sx={{
                          pointerEvents: 'none', // makes it non-clickable
                          backgroundColor: 'white',
                          color: 'text.primary',
                          '&:hover': {
                            backgroundColor: 'transparent', // disables hover effect
                          },
                          borderRadius: '62rem',
                          border: '1px solid',
                          borderColor: theme.palette.custom.outline,
                          paddingX: 3,
                        }}
                      >
                        <Groups2Icon />
                        {count} Members
                      </Button>

                      <Button
                        variant="contained"
                        onClick={() => {
                            if (joined) {
                              setCount((prevCount) => Math.max(prevCount - 1, 0));
                            } else {
                              setCount((prevCount) => prevCount + 1);
                            }
                            setJoined(!joined);
                          }}
                        sx={{
                          borderRadius: '62rem',
                          paddingX: 3,
                          backgroundColor: joined ? '#166B54' : '#CEE9DC',
                          color: joined ? 'white' : '#344C42',
                          border: '1px solid',
                          borderColor: theme.palette.custom.outline,
                          textTransform: 'none',
                          '&:hover': {
                            backgroundColor: joined ? '#145D4B' : '#BFE0D3',
                          },
                        }}
                      >
                        {joined ? '✓ Joined' : '+ Join'}
                      </Button>
                    </ButtonGroup>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width:'95%' }}>
                      <IconButton>
                        <InstagramIcon />
                      </IconButton>
                      <IconButton>
                        <LanguageIcon />
                      </IconButton>
                      <IconButton>
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton>
                        <EmailIcon />
                      </IconButton>
                    </Box>
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                  <Box
                    sx={{
                      borderRadius: '1rem',
                      padding: { xs: 2, sm: 3 },
                      width: '90%',
                      maxWidth: 800,
                      boxShadow: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 2, 
                      height: '60%', 
                      backgroundColor: '#CEE9DC'
                    }}
                  >
                    {/* Question Bubble */}
                    <Box
                      sx={{
                        backgroundColor: '#166B54',
                        color: 'white',
                        px: 2.5,
                        py: 0.5,
                        borderRadius: '1rem',
                        alignSelf: 'flex-start',
                        maxWidth: '100%',
                      }}
                    >
                      “Do I have to have any experience to be a part of MESH?”
                    </Box>

                    {/* Answer Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.primary,
                      }}
                    >
                      “No! MESH is open and inclusive to members of all skill levels and backgrounds, and we offer workshops and lessons for members looking to sharpen their skills.”
                    </Typography>

                    {/* More Answers Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          borderRadius: '1rem',
                          textTransform: 'none',
                          px: 2.5,
                          py: 0.5,
                          backgroundColor: '#166B54'
                        }}
                      >
                        20 more answers
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, my: 1 }} >
                  {interest_tags.map((label, index) => (
                    <Button
                        key={index}
                        variant="contained"
                        size="medium"
                        sx={{ borderRadius: '62rem',
                        backgroundColor: '#166B54',
                        '&:hover': { backgroundColor: '#344C42' },
                        textTransform: 'none',
                        marginTop: 'auto',
                        width: '17.5%'
                        }}
                    >{label}</Button>
                  ))}
                </Box>
              </Box>
              <Box sx={{
                        width: '47.5%',
                        height: 400,
                        backgroundColor: 'rgb(123, 117, 130)',
                        borderTopLeftRadius: '1rem',
                        borderBottomLeftRadius: '1rem',
                        borderWidth: 3,
                        borderStyle: 'solid',
                        borderColor: 'secondary',
                        borderRight: 'none'
                      }}>
                <img src={'/backdrops/mesh-logo.jpg'} alt='' style={{ objectFit: 'cover', width: '100%', height:'100%', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem' }}/>
              </Box>
            </Box>
            {/* RSO Hook and Description */}
            <Box sx={{mx: 5, marginTop: 2}}>
              <Typography variant='h5' >{rso.description}</Typography>
              {/* 
              <Typography variant='h5' >If you're interested in fashion in any aspect - designing, admiring, styling - you've come to the right place.</Typography>
              <Divider sx={{ width: '90%', mx: 'auto', my: 2 }}/>
              <Typography variant='h6'>Welcome to MESH, a fashion-design focused organization dedicated to cultivating creativity and style! Our primary focus is on building a community that embraces members of all skill levels with sincerity and dedication. Whether you're a seasoned designer or a novice, our workshops are created to be accessible and beginner-friendly, providing everyone with an opportunity to learn and grow. These workshops will empower you with essential skills, from the fundamentals of sketching to the intricacies of sewing, enabling you to bring your unique fashion ideas to fruition with proficiency and precision.</Typography>
              <Typography variant='h6'></Typography>
              <Typography variant='h6'>Beyond honing our members' talents, we also take immense pride in recognizing their achievements. Our annual educational EXPO held every February, is a fun social event that celebrates the our community's creativity! We bring together fashion organizations from all over Seattle to showcase their talent and provide resources for students wanting to continue fashion outside of UW!</Typography>
              <Typography variant='h6'></Typography>
              <Typography variant='h6'>In May, our student-led fashion show becomes the stage for emerging designers to display their visionary creations. It is a platform that not only exhibits their talents but also encourages innovation and pushes the boundaries of contemporary style.</Typography>
              <Typography variant='h6'></Typography>
              <Typography variant='h6'>To stay connected with the latest updates on our events and to gain exclusive insights into the world of fashion, follow us on Instagram and join our community on Discord. See you at our next event!</Typography>
                */}
              </Box>
            <Divider sx={{ my: 2 }} />
            {/* RSO Events */}
            <Box sx={{mx: 5}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Typography variant='h5'>{rso.rso_name}'s Events</Typography>
                    <Link to="/RSOs" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large" sx={{ borderRadius: '62rem', backgroundColor: '#166B54', '&:hover': { backgroundColor: '#4b3c6f' }, textTransform: 'none', width: '10rem'}}>
                            View All Events
                        </Button>
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: 2 }}>
                  {events.slice(0,3).map((event, index) => (
                    <Box key={index} sx={{ flex: '0 0 auto' }}>
                      <EventCardMESH
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
                 <Divider sx={{ width: '90%', mx: 'auto', my: 2 }}/>
            </Box>
            {/* RSO Announcements */}
            <Box sx={{mx: 5}}>
                <Typography variant='h5'>{rso.rso_name}'s Announcements</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: 2 }}>
                  {announcements.slice(0,3).map((announcement, index) => (
                    <Box key={index} sx={{ flex: '0 0 auto' }}>
                      <AnnouncementCardMESH
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
            <Divider sx={{ my: 2 }} />
            {/* RSO Officers */}
            <Box sx={{mx: 5}}>
              <Typography variant='h5'>{rso.rso_name}'s Officers</Typography>
              <Box>
                  <div className="relative w-full overflow-visible">
                      <Swiper
                          slidesPerView={4}
                          spaceBetween={30}
                          initialSlide={0}   
                          pagination={{ clickable: true }}
                          modules={[Pagination]}
                          className="mySwiper"
                      >
                      {board_members.map((officer, index) => (
                          <SwiperSlide
                          key={index}
                          className="transition-transform"
                          >
                              <OfficerCardMESH
                              officerImage={`/officers/0${index + 1}.png`}
                              officerName={officer.name}
                              officerPosition={officer.role}
                              officerEmail={officer.email}
                              />
                          </SwiperSlide>
                      ))}
                      </Swiper>
                  </div>
              </Box>
            </Box>
        </>
    );
}

export default RSO; 