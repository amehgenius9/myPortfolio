import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Amehgenius9</a>
      <div className="footer__socials">
      <a href="https://github.com/amehgenius9" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/amehgenius9" target="_blank" rel="noreferrer" ><BsTwitter /></a>
      <a href="https://www.linkedin.com/in/victor-ameh-02b678228/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      </div>
      <div className="footer__footer">
        <small>&copy; dCreator {getYear()}.</small>
      </div>
    </footer>
  )
}

export default Footer
