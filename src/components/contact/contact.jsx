import React, { useState } from 'react';
import Footer from '../footer/Footer';
import './contact.css';

export default function Contact() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  return (
    <div style={{ minHeight: '100vh' }}>
      <h1 style={{ padding: '5rem 2rem 2rem 2rem', textAlign: 'center' }}>CONTACT ME</h1>

      <form action="https://formspree.io/f/mjvlbdql" method="POST">
        <div className='contact-form'>
          <label htmlFor='name'>
            Your name
            <input
              type='text'
              id='name'
              name='name'
              // value={name}
              // onChange={e => setName(e.target.value)}
            ></input>
          </label>
        </div>
        <div className='contact-form'>
          <label htmlFor='email'>
            Your email
            <input
              type='text'
              id='email'
              name='email'
              // value={email}
              // onChange={e => setEmail(e.target.value)}
            ></input>
          </label>
        </div>
        <div className='contact-form'>
          <label htmlFor='message'>
            Your message
            <textarea
              type='text'
              id='message'
              name='message'
              // value={message}
              // onChange={e => setMessage(e.target.value)}
            ></textarea>
          </label>
          <br></br>
          <button style={{ color: 'var(--input-color' }} type='submit'>
            Send
          </button>
          <div>
            <h2 style={{ padding: '2rem 1rem', textAlign: 'center' }}>
              You can also find me on GitHub and LinkedIn{' '}
            </h2>
            <div className='btn-contact'>
              <a
                style={{ textDecoration: 'none', color: 'var(--input-color' }}
                href='https://github.com/StriMer22'
                className='btn-link'
                rel='noopener noreferrer'
                target='_blank'
              >
                GitHub
              </a>
              <a
                style={{ textDecoration: 'none', color: 'var(--input-color' }}
                href='https://www.linkedin.com/in/dmytro-boiko-90b3511b4/'
                className='btn-link'
                rel='noopener noreferrer'
                target='_blank'
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
