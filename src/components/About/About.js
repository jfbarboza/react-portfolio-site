import React from 'react';
import './about.css';
import aboutMe from '../../assets/img/about-me.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutMe} alt="Jorge Barboza" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>70+ Projects Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident quas iure soluta ex itaque asperiores eaque sequi laudantium obcaecati perspiciatis delectus fuga inventore natus, culpa facere quae, dolorem blanditiis.</p>
          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About
