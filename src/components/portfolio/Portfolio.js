import React from 'react';
import IMG1 from '../../assets/Counter.png';
import IMG2 from '../../assets/grid component.webp';
import IMG3 from '../../assets/landing page.webp';
import IMG4 from '../../assets/colorPickerGame.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Color Picker Game',
      img: IMG4,
      description:
        'color picker game that was design to test the ability of a user on his "RGB" mixture color choice',
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://colorpickergamebyameh.netlify.app/',
      github: 'https://github.com/amehgenius9/ColorPickerGame',
    },
    {
      id: 2,
      title: 'Grid Component Card',
      img: IMG2,
      description:
        'A fully responsive grid card component page showing informations in different boxes',
      technologies: 'HTML | CSS',
      link: 'https://cardgridcomponent.netlify.app/',
      github: 'https://github.com/amehgenius9/card-component',
    },
    {
      id: 3,
      title: 'Flyo Landing Page',
      img: IMG3,
      description: 'A static landing page of flyo in dark mode. Fully responsive',
      technologies: 'HTML | CSS',
      link: 'https://landpage-sh.netlify.app/',
      github: 'https://github.com/amehgenius9/SH-CAPSTONE-1',
    },
    {
      id: 4,
      title: 'Counter App',
      img: IMG1,
      description:
        'Counter app is a simple app that increment, decrement and reset the counter of number',
      technologies: 'HTML | CSS | JAVASCRIPT',
      link: 'https://icrementanddecrement-app.netlify.app/',
      github: 'https://github.com/amehgenius9/Counter-App',
    },
  ];

  return (
    <section id="portfolio">
      <h2 className='port'>Portfolio</h2>
      <h5 className='port-description'>Some of my work</h5>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
