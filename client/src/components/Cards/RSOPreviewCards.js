import { Button, AppBar, Toolbar, Typography, Card, CardContent, Box, CardMedia, Avatar, Stack, IconButton } from '@mui/material';

const RSOPreviewCard = () => {
    return (
        <Card sx={{ width: 275, borderRadius: '2rem' }}>
            <CardContent sx={{ p: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar src="logo512.png" alt="MESH UW" sx={{ width: 200, height: 200 }}/>
                <Typography>RSO</Typography>
            </CardContent>
        </Card>
    );
};

export default RSOPreviewCard;