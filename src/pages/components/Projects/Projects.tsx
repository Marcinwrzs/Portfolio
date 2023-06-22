import {GlobalContext} from 'context/Globalstate';
import {useContext} from 'react';
import Motion from 'pages/Motion';
import Foodie from 'img/Foodie.png';
import Blackjack from 'img/Blackjack.png';
import Portfolio from 'img/Portfolio.png';

import { ProjectsWrapper, StyledProjects, StyledProject } from './Projects.styled'
import { AiFillGithub, AiOutlineDesktop } from "react-icons/ai";

interface Project {
  id: number;
  title: string;
  img: string;
  page?: string;
  github: string;
  description: string;
  technologies: string;
}

const Projects: React.FC = () => {

  const { darkMode } = useContext(GlobalContext);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Foodie',
      img: Foodie,
      page: 'https://foodie-reactapp.netlify.app/',
      github: 'https://github.com/Marcinwrzs/Foodie',
      description: 'Foodie is an application written in <b>React</b> and <b>Typescript</b> with custom hooks like <b>usePagination</b>, project uses communication via http with the external Api. You can find the popular recipes or look for them by a category or specific name, see details of each recipe or add to favourites.', 
      technologies: 'React with custom Hooks like usePagination, Typescript, react-router, Context API, React Slick.'
    },
    {
      id: 2,
      title: 'Portfolio',
      img: Portfolio,
      page: 'https://marcinwrzs.github.io/Portfolio/',
      github: 'https://github.com/Marcinwrzs/Portfolio',
      description: '<b>React</b> and <b>Typescript</b> Application which depicts my resume. Functions responsible for the Day and Night mode have been moved to <b>Context API</b>. You are able to send me an email by contact form, which is implemented by <b>EmailJS</b>. ', 
      technologies: 'React, Typescript, Context API, react-router, styled-components, EmailJS.'
    },
    {
      id: 3,
      title: 'Blackjack',
      img: Blackjack,
      github: 'https://github.com/Marcinwrzs/Blackjack.git',
      description: 'Project is a copy of a card game called Blackjack, written with Object Oriented Programming principles', 
      technologies: 'HTML, SCSS, Javascript, Webpack.'
    },
    
  ];

  return (
    <Motion>
      <ProjectsWrapper>
      <h1>My projects:</h1>
      <StyledProjects>
        {projects.map((project) => {
          const {id, title, img, github, description, technologies, page} = project;
          return (
            <StyledProject key={id} darkMode={darkMode}>
              <h2>{title}</h2>
              <div className='container'>
                <div className="container-photo"> 
                  <img src={img} alt={title} />
                  <ul>
                    {page && 
                      <li>
                        <a href={page} rel="noreferrer" target='_blank'>
                          <AiOutlineDesktop/>Demo
                        </a>
                      </li>}
                    <li>
                      <a href={github} rel="noreferrer" target='_blank'>
                        <AiFillGithub/>Code
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='container-description'>
                  <p dangerouslySetInnerHTML={{__html: description}}></p>
                  <p><b>Tech Stack:</b> {technologies}</p> 
                </div>
              </div>
            </StyledProject>
          )
        })}
      </StyledProjects>
      </ProjectsWrapper>
    </Motion>
  );
}

export default Projects;  