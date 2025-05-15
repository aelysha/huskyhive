import { Box, Card, CardContent, Avatar, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const AnnouncementCard = (props) => {
    const {
        rsoName,
        rsoLogo,
        content,
        infoType
      } = props;
    const theme = useTheme();
    return (
            <Card elevation={0} sx={{ backgroundColor: theme.palette.background.default }}>
                <CardContent> 
                    <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 0.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar src={rsoLogo} alt={rsoName} sx={{ width: 50, height: 50, mr: 2}} />
                            <Box>
                                <Typography variant="h5">
                                    <span style={{ fontWeight: 'bold' }}>{rsoName}</span> posted an {infoType}
                                </Typography>
                                <Typography variant="body1">{content}</Typography>
                            </Box>
                        </Box>
                        <Link to="/RSOs" style={{ textDecoration: 'none' }}> 
                            <Button sx={{ borderRadius: '62rem' , ml: 1}}>
                                <IconButton sx={{
                                        backgroundColor: theme.palette.custom.onPrimaryContainer, 
             
                                    }}>
                                    <ArrowForwardIcon sx={{color: theme.palette.custom.primaryContainer}} />
                                </IconButton>
                            </Button>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
    );
};

export default AnnouncementCard;