import { Button, Typography, Card, CardContent, Box, CardMedia, Avatar, IconButton, useTheme } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom'; 

const AnnouncementCard2 = (props) => {
  const {
      rsoName,
      rsoLogo,
      timePosted,
      announcementImage,
      announcementTitle,
      announcementDate,
      announcementDescr
    } = props;

    const theme = useTheme();
  
    return (
      <Card sx={{ width: 400, height: 450, borderRadius: 3, overflow: 'hidden', position: 'relative', border: '1px solid #ccc', boxShadow: 3, marginY: 2, display: 'flex', flexDirection: 'column'}}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              src={rsoLogo}
              alt={rsoName}
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight="bold">
                {rsoName}
              </Typography>
              <Typography variant="caption">{timePosted}</Typography>
            </Box>
          </Box>
  
          <IconButton>
            <ErrorIcon />
          </IconButton>
        </Box>
  
        {/* Image */}
        <CardMedia component="img" image={announcementImage} alt={announcementTitle} sx={{ height: 150, objectFit: 'cover' }} />
  
        {/* Content */}
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent:"space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            {announcementTitle}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {announcementDate}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {announcementDescr}
          </Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Link to="/RSOs" textDecoration="none">
              <Button
                  variant="contained"
                  sx={{ borderRadius: '62rem',
                  backgroundColor: theme.palette.secondary.main,
                  '&:hover': { backgroundColor: theme.palette.primary.dark },
                  textTransform: 'none',
                  marginTop: 'auto'
                  }}
              >
                  View More
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    );
  };
  
export default AnnouncementCard2;