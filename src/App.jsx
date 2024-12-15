import React from 'react'
import Paper from '@mui/material/Paper'
import './App.css';
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
        marginRight: '10%'}}></Paper>

   
    </>

  )
}

export default App