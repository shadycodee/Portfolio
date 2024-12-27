import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Contact = () => {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
    
      height="100vh"
    >
      <h4 style={{color: 'white'}}> Connect with me</h4>
       
      
      <Box>
        <IconButton 
          component="a" 
          href="https://github.com/shadycodee" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton 
          component="a" 
          href="https://www.linkedin.com/in/roble20/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton 
          component="a" 
          href="mailto:johnoscar.roble@gmail.com"
        >
          <Email fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Contact;