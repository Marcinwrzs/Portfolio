import Motion from 'pages/Motion';
import Foodie from 'img/Foodie.png';
import Blackjack from 'img/Blackjack.png';
import Portfolio from 'img/Portfolio.png';
import { ProjectsWrapper, StyledProjects, StyledProject } from './Projects.styled'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Foodie',
      img: Foodie,
      page: 'https://foodie-reactapp.netlify.app/',
      github: 'https://github.com/Marcinwrzs/Foodie',
      description: 'Foodie is an application written in <b>React</b> with RWD standards with recipes from the external API Spoonacular.com. You can find the popular recipes or look for them by a category or specific name.', 
      technologies: 'Technologies which have been used for this app: <b>React with Hooks, react-router, styled-components, external API</b>, some functions have been moved to the <b>GlobalContext</b> section and handled by Reducers. The slider on the main page has been made by <b>Splidejs</b>.'
    },
    {
      id: 2,
      title: 'Portfolio',
      img: Portfolio,
      page: 'https://marcinwrzs.github.io/Portfolio/',
      github: 'https://github.com/Marcinwrzs/Portfolio',
      description: '<b>React</b> Application which depicts my resume. Project is responsive and works on mobile devices. You are able to switch between <b>Day and Night mode</b>, open my resume in the <b>Resume</b> section or send an email by <b>contact form</b>.', 
      technologies: 'Technologies which have been used for this app: <b> React with Hooks, react-router, styled-components</b>. Contact Form is supported by external email service <b>EmailJS</b>.'
    },
    {
      id: 3,
      title: 'Blackjack',
      img: Blackjack,
      github: 'https://github.com/Marcinwrzs/Blackjack.git',
      description: 'Project is a copy of a card game called Blackjack and it has been written in vanilla <b>Javascript</b>.', 
      technologies: 'Technologies which have been used for this app: <b>HTML, SCSS, Javascript in Object Oriented Programming</b> standards. Project has been bundled in the <b>Webpack</b>.'
    },
    
  ];

  return (
    <Motion>
      <ProjectsWrapper>
      <h1>Projects which I have made:</h1>
      <StyledProjects>
        {projects.map((project) => {
          const {id, title, img, github, description, technologies, page} = project;
          return (
            <StyledProject key={id}>
            <h2>{title}</h2>
            <img src={img} alt={title} />
            <div className="link-container"> 
              {page ? <a href={page} target='_blank'><h3>View website!</h3></a> : ''}
              <a href={github} target='_blank'>
                <h3>View project on Github!</h3>
              </a>
            </div>
            <p dangerouslySetInnerHTML={{__html: description}}></p>
            <p dangerouslySetInnerHTML={{__html: technologies}}></p>
          </StyledProject>
          )
        })}
      </StyledProjects>
      </ProjectsWrapper>
    </Motion>
  );
}

export default Projects;  