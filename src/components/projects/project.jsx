import React from 'react';
import './styles/project.css';

const Project = (props) => {
  const { logo } = props;

  return (
    <div className='project'>
      <div className='project-container'>
        <div className='project-logo'>
          <img src={logo} alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default Project;
