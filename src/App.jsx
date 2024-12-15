import React from 'react'
import Paper from '@mui/material/Paper'
import './App.css';
import { colors } from '@mui/material';
function App() {
  return (
    <>
    <div className='header'> 
      <h1>JOHN OSCAR ROBLE </h1>
      <h3>Software Engineer</h3>
      

    </div>
    <Paper elevation={3} 
    sx={{backgroundColor: '#4d82d6', 
        height: '100vh',
        marginLeft: '10%',
        marginRight: '10%'}}>
          <div className='about-me-section'>
            <h4 style={{margin: '10px'}}>Content</h4>
            

          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems:'center', marginTop: '20%'}}><h3 style={{color: 'white'}}>Under construction...</h3></div>
         
        </Paper>

   
    </>

  )
}

export default App