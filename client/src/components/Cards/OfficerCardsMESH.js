import { Button, Typography, Card, CardContent, Box, CardMedia, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const OfficerCardMESH = (props) => {
  const {
      officerImage,
      officerName,
      officerPosition,
      officerEmail
    } = props;

    const theme = useTheme();

    return (
        <>
           <Card sx={{ width: 300, height: 400, borderRadius: 3, overflow: 'hidden', position: 'relative', border: '1px solid #ccc', boxShadow: 3, marginY: 2, display: 'flex', flexDirection: 'column'}}>
                {/* Header */}
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    backgroundColor: 'white',
                }}
                ></Box>
        
                {/* Image */}
                <CardMedia component="img" image={officerImage} sx={{ height: 200, objectFit: 'cover' }} />
        
                {/* Content */}
                <CardContent sx={{ backgroundColor: 'white', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent:"space-between" }}>
                    <Typography variant="h5" sx={{ textAlign:'center', color:'#344C42' }}>
                        {officerName}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign:'center', color:'#344C42' }}>
                        {officerPosition}
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={2}>
                        <Link to={`mailto:${officerEmail}`} textDecoration="none">
                            <Button
                                variant="contained"
                                sx={{ borderRadius: '62rem',
                                backgroundColor: '#166B54',
                                '&:hover': { backgroundColor: '#344C42' },
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

export default OfficerCardMESH;