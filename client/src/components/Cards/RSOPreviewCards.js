import { Typography, Card, CardContent, Avatar } from '@mui/material';

const RSOPreviewCard = (props) => {
    const {
        rso,
        logo
      } = props;
      return (
        <Card sx={{ width: 275, borderRadius: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', height: 275 }}>
            <CardContent sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%'}}>
                <Avatar src={logo} alt={rso} sx={{ width: 100, height: 100, objectFit: 'contain', mb: 2 }} />
                <Typography variant="h6" fontWeight={700} sx={{ textAlign: 'center' }}>{rso}</Typography>
            </CardContent>
        </Card>
    );
};

export default RSOPreviewCard;