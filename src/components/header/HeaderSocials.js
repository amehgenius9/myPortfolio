import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/amehgenius9" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/amehgenius9" target="_blank" rel="noreferrer" ><BsTwitter /></a>
      <a href="https://www.linkedin.com/in/victor-ameh-02b678228/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials