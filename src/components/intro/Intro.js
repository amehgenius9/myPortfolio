import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import picture from '../../assets/Picture.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={picture} alt="profile" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>I'm a young, hardworking, resourceful and dedicated graduate, with proven success in
          managing activities that cuts across different sectors. A motivated frontend developer
          with meaningful knowledge of HTML, CSS, JavaScript, and React JS. An excellent
          communicator, having great customer relations, and a keen eye for details. A
          computer enthusiast.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro