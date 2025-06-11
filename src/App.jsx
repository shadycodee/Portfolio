import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import './App.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InfoIcon from '@mui/icons-material/Info'; // Icon for "About"
import FolderIcon from '@mui/icons-material/Folder'; // Icon for "Projects"
import EmailIcon from '@mui/icons-material/Email'; // Icon for "Contact"
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { useMediaQuery } from '@mui/material'; // Import useMediaQuery

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const isMobile = useMediaQuery('(max-width: 768px)'); // Detect mobile screen size

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className='my-500'>
      <div className='text-center'>
        <h1 className='text-7xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white'>JOHN ROBLE</h1>
        <h3 className='text-5xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white'>Data Analyst | QA Engineer</h3>
      </div>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: '#4d82d6',
          padding: '0px',
        }}
        className='w-full max-w-6xl mx-auto p-0 md:px-8 lg:px-12'
      >
        <div className="tab-section">
          <ButtonGroup variant="text" size="large" aria-label="Basic button group" className='button-group'>
            <Button
              onClick={() => setActiveTab('about')}
              className={activeTab === 'about' ? 'tab active' : 'tab'}
              startIcon={<InfoIcon />}
            >
              {(!isMobile || activeTab === 'about') && 'About'}
            </Button>
            <Button
              onClick={() => setActiveTab('projects')}
              className={activeTab === 'projects' ? 'tab active' : 'tab'}
              startIcon={<FolderIcon />}
            >
              {(!isMobile || activeTab === 'projects') && 'Projects'}
            </Button>
            <Button
              onClick={() => setActiveTab('contact')}
              className={activeTab === 'contact' ? 'tab active' : 'tab'}
              startIcon={<EmailIcon />}
            >
              {(!isMobile || activeTab === 'contact') && 'Contact'}
            </Button>
          </ButtonGroup>
        </div>
        <div className='content'>
          {renderContent()}
        </div>
      </Paper>
    </div>
  );
}

export default App;