import React from 'react'
import Image from '../assets/profile_pixel.png';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 text-white space-y-8 md:space-y-0 md:space-x-8">
      {/* Image Section */}
      <img
        src={Image}
        alt="About Me"
        className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover"
      />
      
      {/* Paragraph Section */}
      <div className="flex flex-col items-center md:items-start">
      <h3 className="text-4xl font-bold mb-4 text-left md:text-left">About Me</h3>
        <p className="text-center md:text-left text-xl md:text-2xl leading-relaxed">
          I have experience working with confidential data, helping companies analyze and derive valuable insights to drive better decisions. However, my true passion lies in software engineering and QA. I am constantly exploring my curiosity through technology and aiming to create eccentric discovery.
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h3 className="text-4xl font-bold mb-4">Skills</h3>
          <div className="space-y-4 text-2xl">
            <div>
              <span className="font-semibold">Languages:</span> HTML, CSS, Python, SQL, C, JavaScript, Java, Kotlin
            </div>
            <div>
              <span className="font-semibold">Libraries:</span> React, Django, Flask, Tailwind
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About