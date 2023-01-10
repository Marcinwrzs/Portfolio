import React, {useContext} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {GlobalContext} from 'context/Globalstate';
import About from 'pages/components/About/About';
import Experience from 'pages/components/Experience/Experience';
import Projects from 'pages/components/Projects/Projects';
import Contact from 'pages/components/Contact/Contact';
import {AnimatePresence} from 'framer-motion';
import 'index.css';
import { PagesCountainer } from './Pages.styled'

const Pages = () => {

  const {isOpen, darkMode} = useContext(GlobalContext);
  const location = useLocation();
  
  return (
    <AnimatePresence>
      <PagesCountainer isOpen={isOpen} darkMode={darkMode}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PagesCountainer>
    </AnimatePresence>
  )
}

export default Pages;