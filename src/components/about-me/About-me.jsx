import React from 'react';
import './about-me.css';
import Photo from '../../assets/About-me.png';
import { navLink } from "../../assets/navLink";
import { Link } from "react-router-dom";
import Tech from '../tech/Tech';

function createLinks() {
  return navLink.map((elem, idx) => (
    <p key={idx}>
      <Link to={elem.ref}>{elem.name}</Link>
    </p>
  ));
}

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
            broaden my knowledge on any given subject
          </span>
        </div>
      </div>
      
      <Tech />

      <div id='contact' className='contact_container'>
        <div className='contact_links_container'>
          <div>
            <p>Dmytro Boiko</p>
            <p>homen932@gmail.com</p>
            <p>
              <a href='https://github.com/StriMer22'>github</a>
            </p>
            <p>
              <a href='https://www.linkedin.com/in/dmytro-boiko-90b3511b4/'>
                linkedin
              </a>
            </p>
          </div>
          <div>{createLinks()} </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          Copyright&copy;{new Date().getFullYear()} All rights reserved
        </div>
    </div>

    </div>
  );
}
