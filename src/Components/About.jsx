import React from 'react'
import Image from '../assets/profile_pixel.png';

function About() {
  return (
    <>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '50px',
            fontSize: '30px',
            color: 'white',
        }}>
            <img src={Image} alt="About Me" style={{ width: '250px', borderRadius: '10px', border: '4px solid black'  }} />
           <p> I’m a 4th-year BSIT student who loves building apps and enjoys creating pixel art in my free time.</p>
        </div>

    </>
  )
}

export default About