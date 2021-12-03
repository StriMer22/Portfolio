import React from 'react';
import './project.css';
import Footer from '../footer/Footer';
import { ReactComponent as Gear } from '../../assets/gear.svg';

export default function project() {
  return (
    <div>
      <div className='container_gear'>
        <Gear />
        <h1>Coming soon...</h1>
      </div>
      <Footer />
    </div>
  );
}
