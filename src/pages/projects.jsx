import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import NavBar from '../components/common/navBar';
import Footer from '../components/common/footer';
import Logo from '../components/common/logo';
import AllProjects from '../components/projects/allProjects';

import INFO from '../data/user';
import SEO from '../data/seo';

import './styles/projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === 'projects');

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name='description' content={currentSEO.description} />
        <meta name='keywords' content={currentSEO.keywords.join(', ')} />
      </Helmet>

      <div className='page-content'>
        <NavBar active='projects' />
        <div className='content-wrapper'>
          <div className='projects-logo-container'>
            <div className='projects-logo'></div>
          </div>
          <div className='projects-container'>
            <div className='title projects-title'>
              Things I’ve made trying to put my dent in the universe.
            </div>

            <div className='subtitle projects-subtitle'>
              Industry expert in email marketing, social media (SMO), PPC (SEM),
              backlinks, and local SEO. Internet and digital marketing
              experience spanning more than 5 years. The branding, conversion,
              sales, and retention of the clients websites are my top priorities
              as a service. I work with customers to use digital marketing
              techniques to increase their internet visibility. I exclusively
              teach ethical, White-hat techniques that abide by the most recent
              Google updates and will aid you in getting a high ranking on SERPs
              across all major search engines. Several of my websites have been
              e-Commerce optimise
            </div>

            <div className='projects-list'>
              <AllProjects />
            </div>
          </div>
          <div className='page-footer'>
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
