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
  AppBar,
  Toolbar,
  Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import RSOCard from '../../components/Cards/RSOCards';

export const rsoData = [
    {
      id: 1,
      name: "Mesh Fashion Club",
      logo: "/assets/mesh_logo.png", // Replace with actual image path
      categories: ["Fashion and Modeling"],
      description: "Student organization focused on fashion design, modeling, and industry trends."
    },
    {
      id: 2,
      name: "UW Style Collective",
      logo: "/assets/style_logo.png", // Replace with actual image path
      categories: ["Fashion and Modeling"],
      description: "A community for students interested in personal style and fashion journalism."
    },
    {
      id: 3,
      name: "Fashion Business Association",
      logo: "/assets/fba_logo.png", // Replace with actual image path
      categories: ["Fashion and Modeling", "Business"],
      description: "Connecting fashion enthusiasts with business opportunities and industry professionals."
    },
    // Additional clubs in other categories (not shown in filtered view)
    {
      id: 4,
      name: "ACGN Club at UW",
      logo: "/assets/acgn_logo.png", // Replace with actual image path
      categories: ["Gaming and eSports"],
      description: "Anime, Comics, Games, and Novels club for enthusiasts."
    },
    {
      id: 5,
      name: "ACS & Phi Lambda Upsilon Chemistry Honorary Society",
      logo: "/assets/acs_logo.png", // Replace with actual image path
      categories: ["Academic", "Sciences"],
      description: "Chemistry honorary society promoting excellence in chemical sciences."
    }
  ];
  
  // List of available categories for filters
  export const categoryList = [
    "Academic",
    "Active",
    "Arts/Creative",
    "Business",
    "Cultural/International",
    "Engineering",
    "Environmental",
    "Event-focused",
    "Fashion and Modeling",
    "Gaming and eSports",
    "Graduate/Professional",
    "Hobby",
    "Health Sciences",
    "Identity and Affinity Groups",
    "Law",
    "Major-Specific",
    "Medical",
    "Music",
    "Outdoors",
    "Performance",
    "Political & Social Action",
    "Professional Development",
    "Project-Oriented",
    "Recreational",
    "Religious / Spiritual",
    "Sciences",
    "Social",
    "Special Interest",
    "Trips and Travel",
    "Volunteering"
  ];

/**
 * Modal component for displaying RSO details
 */
const RSOModal = ({ open, onClose, rso }) => {
  if (!rso) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="rso-modal-title"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography id="rso-modal-title" variant="h5" component="h2" fontWeight="bold">
            {rso.name}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Box
            component="img"
            src={rso.logo}
            alt={rso.name}
            sx={{ width: 100, height: 100, mr: 3, borderRadius: '50%', bgcolor: '#f0f0f0' }}
          />
          <Box>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {rso.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Categories: {rso.categories.join(', ')}
            </Typography>
          </Box>
        </Box>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Contact Information
        </Typography>
        <Typography variant="body2">
          Email: mesh.fashion@uw.edu<br />
          Instagram: @mesh_fashion_uw<br />
          Meeting Times: Thursdays at 5:30pm in HUB 332
        </Typography>
      </Box>
    </Modal>
  );
};

/**
 * Main SearchPage component
 * Displays searchable RSO cards with filtering options
 */
const SearchPage = () => {
  // State for managing filters, tabs, and modal
  const [selectedCategories, setSelectedCategories] = useState(['Fashion and Modeling']);
  const [tabValue, setTabValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRSO, setSelectedRSO] = useState(null);

  // Filter RSOs based on selected categories
  const filteredRSOs = rsoData.filter(rso => 
    selectedCategories.some(category => 
      rso.categories.includes(category)
    )
  );

  // Toggle category selection in filters
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Open modal only when clicking Mesh Fashion Club
  const handleCardClick = (rso) => {
    if (rso.name === "Mesh Fashion Club") {
      setSelectedRSO(rso);
      setModalOpen(true);
    }
  };

  // Close the RSO detail modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Handle tab changes
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', minHeight: '100vh' }}>

      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        
        {/* Search Bar - Non-interactive as per requirements */}
        <Paper
          component="form"
          sx={{ 
            p: '2px 4px', 
            display: 'flex', 
            alignItems: 'center', 
            width: '100%',
            mb: 3,
            borderRadius: 50
          }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search RSOs"
            disabled // Disabled as per requirements
          />
        </Paper>
        
        {/* Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            aria-label="RSO categories tabs"
            sx={{
              '& .MuiTab-root': { fontWeight: 'bold' },
              '& .Mui-selected': { color: '#5e4b8b' },
              '& .MuiTabs-indicator': { backgroundColor: '#5e4b8b' }
            }}
          >
            <Tab label="General" />
            <Tab label="Greek Life" />
            <Tab label="Sports and Rec" />
          </Tabs>
        </Box>

        <Grid container spacing={3}>
          {/* Filter Panel */}
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                Filters
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
                Categories
              </Typography>
              <FormGroup>
                {categoryList.map((category, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox 
                        checked={selectedCategories.includes(category)} 
                        onChange={() => handleCategoryChange(category)}
                        sx={{
                          color: '#5e4b8b',
                          '&.Mui-checked': {
                            color: '#5e4b8b',
                          },
                        }}
                      />
                    }
                    label={category}
                  />
                ))}
              </FormGroup>
            </Paper>
          </Grid>
          
          {/* RSO Cards Grid */}
          <Grid item xs={12} md={9}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                1-{filteredRSOs.length} of {filteredRSOs.length}
              </Typography>
            </Box>
            
            <Grid container spacing={2}>
              {filteredRSOs.map((rso) => (
                <Grid item xs={12} sm={6} md={4} key={rso.id}>
                  <RSOCard 
                    rso={rso} 
                    logo={rso.logo || `/api/placeholder/100/100`} // Fallback placeholder if logo not available
                    onClick={() => handleCardClick(rso)}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Modal for Mesh Fashion Club */}
      <RSOModal 
        open={modalOpen} 
        onClose={handleCloseModal} 
        rso={selectedRSO}
      />
    </Box>
  );
};

export default SearchPage;