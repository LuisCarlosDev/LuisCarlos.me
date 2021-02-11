import React from 'react';

import { motion } from 'framer-motion'

import profileImg from '../../assets/logo.jpg'

import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import { MdEmail } from 'react-icons/md';

import { Container, Profile, ProfileContent, ListSites, GitHub, LinkeDin, Instagram, } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Profile>
        <ProfileContent>
         <motion.img 
            src={profileImg}
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "20%", "50%"],
            }}
         />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 2.5 }}
          >

          <h1>Luis Carlos silva</h1>

          </motion.div>
        </ProfileContent>
      </Profile>

      <ListSites>
          <GitHub href="https://github.com/LuisCarlosDev">
            <FaGithub size={45} />
            <h2>GitHub</h2>
          </GitHub>

          <LinkeDin href="https://www.linkedin.com/in/luis-carlos-silva-8856881b4/">
            <FaLinkedin size={45} />
            <h2>Linkedin</h2>
          </LinkeDin>

         {/*  <Email href="luiscarlossilva.dev@gmail.com">
            <MdEmail size={45} />
            <h2>E-mail</h2>
          </Email> */}

          <Instagram href="https://www.instagram.com/luis_carlos__ofc" >
            <FaInstagram size={45} />
            <h2>Instagram</h2>
          </Instagram>
        </ListSites>
    </Container>
  );
}

export default Home;