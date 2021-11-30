import React from 'react';
import './contact.css';
import { navLink } from '../../assets/navLink';

function createLinks() {
  return navLink.map((elem, idx) => (
    <p key={idx}>
      <a href={elem.ref}>{elem.name}</a>
    </p>
  ));
}

function contact() {
  return (
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
  );
}

export default contact;
