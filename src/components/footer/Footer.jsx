import React from 'react';
import './footer.css';
import { navLink } from '../../assets/navLink';
import { Link } from 'react-router-dom';

function Mailto({ email, ...props }) {
  return (
    <a href={`mailto: ${email}`} rel='noopener noreferrer' target='_blank'>
      {props.children}
    </a>
  );
}

function createLinks() {
  return navLink.map((elem, idx) => (
    <p key={idx}>
      <Link to={elem.ref}>{elem.name}</Link>
    </p>
  ));
}

export default function Footer() {
  return (
    <div>
      <div id='contact' className='contact_container'>
        <div className='contact_links_container'>
          <div>
            <p>Dmytro Boiko</p>
            <Mailto email='homen932@gmail.com'>
              <p style={{ textTransform: 'lowercase' }}>homen932@gmail.com</p>
            </Mailto>
            <p>
              <a
                href='https://github.com/StriMer22'
                rel='noopener noreferrer'
                target='_blank'
              >
                github
              </a>
            </p>
            <p>
              <a
                href='https://www.linkedin.com/in/dmytro-boiko-90b3511b4/'
                rel='noopener noreferrer'
                target='_blank'
              >
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
