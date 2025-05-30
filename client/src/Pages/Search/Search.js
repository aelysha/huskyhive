import React, { useState } from 'react';
import {
 Box,
 Typography,
 Container,
 Grid,
 Paper,
 Checkbox,
 FormControlLabel,
 FormGroup,
 InputBase,
 IconButton,
 Tabs,
 Tab,
 Modal,
 Card,
 CardContent,
 CardMedia,
 Avatar,
 Chip,
 Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronRight';
import { Link as RouterLink } from 'react-router-dom';
import { rsoData } from './data/rsoData';
import { mapTagsToOverall } from './data/tagMapper';
import { categories } from './data/categories.js';
import { useTheme } from '@mui/material/styles';


const availableCategories = categories.map(c => c.category_name);
const sortedData = rsoData.sort((a, b) => a.rso_name.localeCompare(b.rso_name));

const RSOCard = ({ rso }) => {
  const [flipped, setFlipped] = useState(false);
  const theme = useTheme();


  const handleFlip = (e) => {
    e.stopPropagation(); 
    setFlipped(!flipped);
  };

  return (
    <Card
      sx={{
        height: 300,
        width: { xs: '100%', sm: '48%', md: '31%', lg: 300 },
        cursor: 'default',
        perspective: 1000,
        borderRadius: 2,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: '100%',
          position: 'relative',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front Side */}
        <Box
          sx={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: 2,
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={rso.rso_background}
            alt={rso.rso_name}
            sx={{ objectFit: 'cover', flexShrink: 0 }}
          />
          <Avatar
            src={rso.rso_logo}
            alt={`${rso.rso_name} logo`}
            sx={{
              width: 75,
              height: 75,
              position: 'absolute',
              top: 8,
              right: 8,
              border: '3px solid white',
              boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
              zIndex: 1,
            }}
          />
          <CardContent
            sx={{
              backgroundColor: 'rgba(220,205,226)',
              pt: 2,
              pb: 1.5,
              px: 2.25,
              height: 120,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 500,
                fontSize: '1.25rem',
                lineHeight: 1.2,
                mb: 0.75,
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 4,
                WebkitBoxOrient: 'vertical',
                fontFamily: theme.typography.fontFamily,
                wordBreak: 'break-word',
                hyphens: 'auto',
                maxWidth: '100%',
                whiteSpace: 'normal',
                textAlign: 'center',
                color: theme.palette.text.primary
              }}
            >
              {rso.rso_name}
            </Typography>
            <ChevronRightIcon 
              onClick={handleFlip}
              sx={{
                position: 'absolute',
                bottom: 12,
                right: 12,
                fontSize: '1.8rem',
                color: theme.palette.custom.onSurfaceVariant,
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            />
          </CardContent>
        </Box>

        {/* Back Side */}
        <Box
          sx={{
            backfaceVisibility: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: '#E6DDF0',
            color: '#333',
            padding: 2,
            borderRadius: 2,
            boxSizing: 'border-box',
            transform: 'rotateY(180deg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            overflowY: 'auto',
            fontSize: '0.9rem',
            lineHeight: 1.4,
          }}
        >
          <Typography
            variant="body2"
            sx={{
               wordBreak: 'keep-all',
               overflowWrap: 'normal',
               hyphens: 'none',
               whiteSpace: 'normal',
               fontSize: '1rem', // or adjust as needed
               lineHeight: 1.5,
            }}
          >
            {rso.search_bio || "No description available."}
          </Typography>
          <Box
            sx={{
              position: 'absolute',
              bottom: 12,
              right: 12,
              left: 12,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <ChevronLeftIcon
              onClick={handleFlip}
              sx={{
                fontSize: '2rem',
                color: '#666',
                cursor: 'pointer',
                transform: 'rotate(180deg)',
              }}
            />
            <Button
              component={RouterLink}
              to={`/RSO/${encodeURIComponent(rso.rso_name)}`} // or rso.slug if you use a URL-safe string
              sx={{
                backgroundColor: '#5e4b8b',
                color: 'white',
                borderRadius: '20px',
                textTransform: 'none',
                px: 3,
                '&:hover': {
                  backgroundColor: '#4a3a70',
                },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              Learn More
            </Button>
          </Box>
          </Box>
        </Box>
    </Card>
  );
};

const SearchPage = () => {
 const [selectedCategories, setSelectedCategories] = useState([]);
 const [activeTab, setActiveTab] = useState('general');
 const [modalOpen, setModalOpen] = useState(false);
 const [selectedRSO, setSelectedRSO] = useState(null);
 const [searchTerm, setSearchTerm] = useState('');
 const theme = useTheme();

 const getTagsArray = (rso) => {
   if (!rso.interest_tags) return [];
   try {
     return JSON.parse(rso.interest_tags);
   } catch {
     return [];
   }
 };


const filteredRSOs = sortedData.filter(rso => {
  const tagsArray = getTagsArray(rso);
  const overallCategories = mapTagsToOverall(tagsArray);

  const matchesTab = activeTab === 'General' ? true : (rso.rso_type?.toLowerCase() === activeTab);


  const matchesCategory = selectedCategories.length === 0 || overallCategories.some(cat => selectedCategories.includes(cat));
  const matchesSearch = searchTerm.trim() === '' || rso.rso_name.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesTab && matchesCategory && matchesSearch;
});



 const handleCategoryChange = (category) => {
   setSelectedCategories(prev =>
     prev.includes(category)
       ? prev.filter(c => c !== category)
       : [...prev, category]
   );
 };



 return (
   <Box sx={{ flexGrow: 1, bgcolor: '#f8f9fa', minHeight: '100vh' }}>
     <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
       {/* Search Bar */}
       <Paper sx={{
         p: '8px 16px',
         display: 'flex',
         alignItems: 'center',
         mb: 3,
         borderRadius: 25,
         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
       }}>
         <SearchIcon sx={{ color: '#999', mr: 1 }} />
         <InputBase
           sx={{
             ml: 1,
             flex: 1,
             fontSize: '1.1rem',
             color: theme.palette.text.primary
           }}
           placeholder="Search for RSOs"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
         />
       </Paper>

       {/* Category Tabs */}
       <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
         <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} centered>
          <Tab label="General" value="general" />
          <Tab label="Sports and Rec" value="sports and rec" />
          <Tab label="Greek Life" value="greek life" />
        </Tabs>
       </Box>


       <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
         {/* Filter */}
         <Box sx={{
           width: 200,
           minWidth: 200,
           flexShrink: 0
         }}>
           <Paper sx={{
             p: 2.5,
             boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
           }}>
             <Typography variant="h2" fontWeight="bold" sx={{ mb: 2, fontSize: '1.5rem', fontFamily: theme.typography.fontFamily, color: theme.palette.custom.onSecondaryContainer }}>
               Filters
             </Typography>
             <Typography variant="h4" fontWeight="600" sx={{ mb: 1.5, fontSize: '0.9rem', color: theme.palette.custom.onSecondaryContainer }}>
               Categories
             </Typography>
             <FormGroup>
               {availableCategories.map((category, index) => (
                 <FormControlLabel
                   key={index}
                   control={
                     <Checkbox
                       size="small"
                       checked={selectedCategories.includes(category)}
                       onChange={() => handleCategoryChange(category)}
                       sx={{
                         color: theme.palette.custom.onSurfaceVariant,
                         '&.Mui-checked': {
                           color: theme.palette.custom.onSurfaceVariant,
                         },
                       }}
                     />
                   }
                   label={
                     <Typography variant="body2" sx={{
                       fontSize: '0.8rem',
                       fontFamily: theme.typography.fontFamily,
                       color: theme.palette.text.primary
                     }}>
                       {category}
                     </Typography>
                   }
                   sx={{ mb: 0.5 }}
                 />
               ))}
             </FormGroup>
           </Paper>
         </Box>
         {/* RSO Cards */}
         <Box sx={{ flex: 1, minWidth: 0 }}>
               <Box 
                  sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mb: 2,
                }}
                >
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: theme.palette.fontFamily }}>
                  {filteredRSOs.length} results
                </Typography>
          </Box>
           <Grid container spacing={3}>
             {filteredRSOs.slice(0, 18).map((rso, index) => (
               <Grid
                 item
                 xs={12}
                 sm={6}
                 md={4}
                 key={`${rso.rso_name}-${index}`}
                 sx={{
                   minWidth: 0, 
                   maxWidth: { xs: '100%', sm: '52%', md: '32%' }
                 }}
               >
                 <RSOCard
                   rso={rso}
                   onClick={() => {
                     setSelectedRSO(rso);
                     setModalOpen(true);
                   }}
                 />
               </Grid>
             ))}
           </Grid>

           {filteredRSOs.length === 0 && (
             <Box sx={{
               textAlign: 'center',
               py: 4,
               color: 'text.secondary'
             }}>
               <Typography variant="h6" sx={{ mb: 1, fontFamily: theme.typography.fontFamily }}>
                 No RSOs found with the provided selection criteria.
               </Typography>
               <Typography variant="body2" sx={{ fontFamily: theme.typography.fontFamily }}>
                 Please try adjusting your filter selections or search query.
               </Typography>
             </Box>
           )}
         </Box>
       </Box>
     </Container>
   </Box>
 );
};


export default SearchPage;

