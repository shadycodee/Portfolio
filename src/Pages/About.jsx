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
            alignItems: 'center',
            marginLeft: '10%',
            marginRight: '10%',

        }}>
            <img src={Image} alt="About Me" style={{ width: '250px', borderRadius: '50%', border: '4px solid transparent', marginRight: '30px' }} />
           <p> I’m a 4th-year BSIT student who loves building apps and enjoys creating pixel art in my free time. <br /> <br />I love Python and SQL!</p>
        </div>

    </>
  )
}

export default About