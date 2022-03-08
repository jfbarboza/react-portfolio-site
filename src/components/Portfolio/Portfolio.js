import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img/portfolio-image-01.jpg';
import IMG2 from '../../assets/img/portfolio-image-02.jpg';
import IMG3 from '../../assets/img/portfolio-image-03.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Comet Content',
    github: 'https://github.com',
    demo: 'http://www.thecometcontent.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Nikki Beach',
    github: 'https://github.com',
    demo: 'http://www.nikkibeach.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Monica Chacin',
    github: 'https://github.com',
    demo: 'http://www.monicachacin.com/'
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        {
          data.map(({id, image, title, demo, github}) => {
            return(
              <article className='portfolio__item' key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt="Portfolio Image 01" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href= {github} className='btn' target="_blank">Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
             
              </article>
            )
          })
        }
       

       
      </div>
    </section>
  )
}

export default Portfolio