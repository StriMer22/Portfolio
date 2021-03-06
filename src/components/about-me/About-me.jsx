import React from 'react';
import './about-me.css';
import Photo from '../../assets/About-me.png';
import Tech from '../tech/tech';
import Footer from '../footer/Footer';

export default function AboutMe() {
  return (
    <div>
      <div id='about-me' className='about-me_container'>
        <div>
          <img src={Photo} alt="Icon of the person's portfolio" />
        </div>
        <div className='about_info'>
          <h1>ABOUT ME</h1>
          <span>
            I am starting off my third and final year of applied computer
            science studies. I consider myself to be a determined person that is
            ready to put in as much hard work as needed to achieve success.
            Additionally, I am always up for a new challenge and eager to
            broaden my knowledge on any given subject.
          </span>
        </div>
      </div>
      <Tech />
      <Footer />
    </div>
  );
}
