import { Button, Typography, Card, CardContent, Box, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const EventCard = (props) => {
  const {
      officerImage,
      officerName,
      officerPosition,
      officerEmail
    } = props;
    return (
        <>
           <Card sx={{ width: 300, height: 400, borderRadius: 3, overflow: 'hidden', position: 'relative', border: '1px solid #ccc', boxShadow: 3, marginTop: 2, display: 'flex', flexDirection: 'column'}}>
                {/* Header */}
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    backgroundColor: '#dccde2',
                }}
                ></Box>
        
                {/* Image */}
                <CardMedia component="img" image={officerImage} sx={{ height: 200, objectFit: 'cover' }} />
        
                {/* Content */}
                <CardContent sx={{ backgroundColor: '#dccde2', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent:"space-between" }}>
                    <Typography variant="h5" sx={{ textAlign:'center' }}>
                        {officerName}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign:'center' }}>
                        {officerPosition}
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Link to="/Events" textDecoration="none">
                            <Button
                                variant="contained"
                                sx={{ borderRadius: '62rem',
                                backgroundColor: '#5e4b8b',
                                '&:hover': { backgroundColor: '#4b3c6f' },
                                textTransform: 'none',
                                marginTop: 'auto'
                                }}
                            >
                                Officer Email
                            </Button>
                        </Link>
                    </Box>
                </CardContent>
            </Card> 
            {/* Overall Card */}

                {/* Officer Image */}

                {/* Officer Name */}

                {/* Officer Position */}

                {/* Officer Email Button */}
        </>
    );
}

export default EventCard;