import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import DownloadIcon from '@mui/icons-material/Download';

const Contact = () => {
  const handleDownload = () => {
    // Replace with the correct path to your resume in the public folder
    const resumeUrl = "/Resume_Roble.pdf"; // Example: public/resume.pdf

    // Create a temporary anchor to initiate download
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "John_Roble_Resume.pdf"; // Name of the downloaded file
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  return (
    <>
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
    >
      <h2 style={{color: 'white', marginBottom: 10, fontSize: '50px'}}> Connect with me</h2>
       
      
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
      <Button variant='contained' startIcon={<DownloadIcon />}
      onClick={handleDownload} sx={{marginTop: 5, backgroundColor: 'white', color: '#4D82D6', marginBottom: 5}}>
      Download Resume
    </Button>
    </Box>
    
    </>
    
  );
};

export default Contact;