import React from 'react';
import Project from './project';
import './styles/allProjects.css';

import Logo1 from './media/image1.jpg';
import Logo2 from './media/image2.jpg';
import Logo3 from './media/image3.jpg';
import Logo4 from './media/image4.jpg';
import Logo5 from './media/image5.jpg';
import Logo6 from './media/image6.jpg';

const AllProjects = () => {
  const Logo = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
  return (
    <div className='all-projects-container'>
      {Logo.map((logo, index) => (
        <div className='all-projects-project' key={index}>
          <Project logo={logo} />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
