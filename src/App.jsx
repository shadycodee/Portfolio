import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import './App.css';
import { colors } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import InfoIcon from '@mui/icons-material/Info'; // Icon for "About"
import FolderIcon from '@mui/icons-material/Folder'; // Icon for "Projects"
import EmailIcon from '@mui/icons-material/Email'; // Icon for "Contact"
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import { Email } from '@mui/icons-material';

function App() {
  const [activeTab, setActiveTab] = useState('about');

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
    <>
    <div className='header'> 
      <h1>JOHN OSCAR ROBLE </h1>
      <h3>Developer</h3>
      

    </div>
    <Paper elevation={3} 
    sx={{backgroundColor: '#4d82d6', 
        height: '70vh',
        marginLeft: '20%',
        marginRight: '20%',
        borderRadius: '4px',
         }}>
        <div className="tab-section">
        <ButtonGroup variant="text" size="large" aria-label="Basic button group">
          <Button
            onClick={() => setActiveTab('about')}
            className={activeTab === 'about' ? 'tab active' : 'tab'}
            startIcon={<InfoIcon />}
          >
            About
          </Button>
          <Button
            onClick={() => setActiveTab('projects')}
            className={activeTab === 'projects' ? 'tab active' : 'tab'}
            startIcon={<FolderIcon />}
          >
            Projects
          </Button>
          <Button
            onClick={() => setActiveTab('contact')}
            className={activeTab === 'contact' ? 'tab active' : 'tab'}
            startIcon={<EmailIcon />}
          >
            Contact
          </Button>
        </ButtonGroup>
      </div>
          {/* <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems:'center', marginTop: '20%'}}><h3 style={{color: 'white'}}>Under construction...</h3></div> */}
          <div className='content'>
          {renderContent()}
          </div>
        
        </Paper>

   
    </>

  )
}

export default App