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
    remainingTime: "in 1 week",
    announcementImage: event1,
    announcementTitle: "Woodland Park Zoo Urban Hike",
    announcementDate: "February 23rd, 10:00 am",
    announcementDescr: "The Wildlife Society and Hiking Club at UW are joining forces for an Urban Hike to Woodland Park Zoo! We’ll be gathering for wildlife and conservation convos as we explore the zoo together on Sunday February 23rd, rain or shine. Those walking",
  },
  {
    rsoName: "MESH UW",
    rsoLogo: logo2,
    remainingTime: "in 1 day",
    announcementImage: event2,
    announcementTitle: "PRISMATIC",
    announcementDate: "May 17th, 4:00pm - 7:00pm",
    announcementDescr: "We invite you to join us for our annual fashion show! Taking place May 17th from 4-7PM at the Nippon Kan Theatre, this is an exhibition of the talents and creativity of Seattle's own fashion designers.",
  },
  {
    rsoName: "Informatics Undergraduate Association",
    rsoLogo: logo3,
    remainingTime: "in 2 days",
    announcementImage: event3,
    announcementTitle: "IUGA Intern Panel",
    announcementDate: "February 13th, 6:00pm - 7:30pm",
    announcementDescr: "Hear about iSchool students’ internship experiences at top companies. Gain insights & connect with peers!",
  },
  {
    rsoName: "Traditional Chinese Dance",
    rsoLogo: logo4,
    remainingTime: "in 2 weeks",
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

function RSO(props) {
    const theme = useTheme();

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
                        borderLeft: 'none'
                      }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Avatar src='' alt='' width='25%' />
                  <Stack width='60%'>
                    <Typography variant='h5' fontWeight='bold'>MESH UW</Typography>
                    <ButtonGroup disableElevation fullWidth sx={{ overflow: 'hidden', width: '95%' }}>
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
                        <Groups2Icon/>
                        650 Members
                      </Button>

                      <Button
                        variant="contained"
                        color="secondary"
                        sx={{
                          borderRadius: '62rem',
                          paddingX: 3,
                        }}
                        onClick={() => alert('Action triggered!')}
                      >
                        + Join
                      </Button>
                    </ButtonGroup>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width:'95%' }}>
                      <IconButton>
                        <InstagramIcon />
                      </IconButton>
                        <IconButton>
                      <InstagramIcon />
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
                      height: '60%'
                    }}
                  >
                    {/* Question Bubble */}
                    <Box
                      sx={{
                        px: 2.5,
                        py: 1,
                        borderRadius: '1.5rem',
                        alignSelf: 'flex-start',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        maxWidth: '100%',
                      }}
                    >
                      “Do I have to have any experience to be a part of MESH?”
                    </Box>

                    {/* Answer Text */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        fontWeight: 400,
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
                          borderRadius: '2rem',
                          textTransform: 'none',
                          fontWeight: 'bold',
                          px: 2.5,
                          py: 0.5,
                          fontSize: { xs: '0.875rem', sm: '1rem' },
                          '&:hover': {
                          },
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
                        backgroundColor: '#5e4b8b',
                        '&:hover': { backgroundColor: '#4b3c6f' },
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
                <img src='' alt='' style={{ objectFit: 'cover' }}/>
              </Box>
            </Box>
            {/* RSO Hook and Description */}
            <Typography variant='h5'>If you're interested in fashion in any aspect - designing, admiring, styling - you've come to the right place.</Typography>
            <Box sx={{ width: '90%', mx: 'auto', my: 2 }}>
              <Divider />
            </Box>
            <Typography variant='h6'>Welcome to MESH, a fashion-design focused organization dedicated to cultivating creativity and style! Our primary focus is on building a community that embraces members of all skill levels with sincerity and dedication. Whether you're a seasoned designer or a novice, our workshops are created to be accessible and beginner-friendly, providing everyone with an opportunity to learn and grow. These workshops will empower you with essential skills, from the fundamentals of sketching to the intricacies of sewing, enabling you to bring your unique fashion ideas to fruition with proficiency and precision.</Typography>
            <Typography variant='h6'></Typography>
            <Typography variant='h6'>Beyond honing our members' talents, we also take immense pride in recognizing their achievements. Our annual educational EXPO held every February, is a fun social event that celebrates the our community's creativity! We bring together fashion organizations from all over Seattle to showcase their talent and provide resources for students wanting to continue fashion outside of UW!</Typography>
            <Typography variant='h6'></Typography>
            <Typography variant='h6'>In May, our student-led fashion show becomes the stage for emerging designers to display their visionary creations. It is a platform that not only exhibits their talents but also encourages innovation and pushes the boundaries of contemporary style.</Typography>
            <Typography variant='h6'></Typography>
            <Typography variant='h6'>To stay connected with the latest updates on our events and to gain exclusive insights into the world of fashion, follow us on Instagram and join our community on Discord. See you at our next event!</Typography>
            <Divider sx={{ my: 2 }} />
            {/* RSO Events */}
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Typography variant='h5'>MESH UW's Events</Typography>
                    <Link to="/RSOs" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large" sx={{ borderRadius: '62rem', backgroundColor: '#5e4b8b', '&:hover': { backgroundColor: '#4b3c6f' }, textTransform: 'none', width: '10rem'}}>
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
            <Box sx={{ width: '90%', mx: 'auto', my: 2 }}>
              <Divider />
            </Box>
            {/* RSO Announcements */}
            <Typography variant='h5'>MESH UW's Announcements</Typography>
            <Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', overflowX: 'auto', gap: 2 }}>
                  {announcements.slice(0,3).map((announcement, index) => (
                    <Box key={index} sx={{ flex: '0 0 auto' }}>
                      <AnnouncementCard2
                        rsoName={announcement.rsoName}
                        rsoLogo={announcement.rsoLogo}
                        remainingTime={announcement.remainingTime}
                        eventImage={announcement.eventImage}
                        eventTitle={announcement.eventTitle}
                        eventDate={announcement.eventDate}
                        eventDescr={announcement.eventDescr}
                      />
                    </Box>
                  ))}
                </Box>
            </Box>
            <Divider sx={{ my: 2 }} />
            {/* RSO Officers */}
            <Typography variant='h5'>MESH UW's Officers</Typography>
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
                    {officers.map((officer, index) => (
                        <SwiperSlide
                        key={index}
                        className="transition-transform"
                        >
                            <OfficerCard
                            officerImage={officer.officerImage}
                            officerName={officer.officerName}
                            officerPosition={officer.officerPosition}
                            officerEmail={officer.officerEmail}
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                </div>
            </Box>
        </>
    );
}

export default RSO; 