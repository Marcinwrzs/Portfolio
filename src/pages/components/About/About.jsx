import {GlobalContext} from 'context/Globalstate';
import {useContext} from 'react';
import Motion from 'pages/Motion';
import portfolioPhoto from 'img/portfolio photo.png';
import portfolioPhotoNight from 'img/portfolio photo night.png';
import { StyledAbout, TextWrapper, PhotoWrapper } from './About.styled';

import { DiReact, DiJsBadge, DiHtml5, DiCss3, DiGithubBadge, } from "react-icons/di";
import { SiTypescript, SiWebpack, SiSass} from "react-icons/si";


const About = () => {

  const {isOpen, darkMode} = useContext(GlobalContext);

  const technologies = [
    {id: 1, technology: 'React', icon: <DiReact/>},
    {id: 2, technology: 'Javascript', icon: <DiJsBadge />},
    {id: 3, technology: 'Typescript', icon: <SiTypescript/>},
    {id: 4, technology: 'Github', icon: <DiGithubBadge/>},
    {id: 5, technology: 'HTML', icon: <DiHtml5/>},
    {id: 6, technology: 'CSS', icon: <DiCss3/>},
    {id: 7, technology: 'Webpack', icon: <SiWebpack/>},
    {id: 8, technology: 'Sass', icon: <SiSass/>},
  ];
  
  return (
    <Motion>
      <StyledAbout darkMode={darkMode}>
        <PhotoWrapper>
          <img src={darkMode ? portfolioPhotoNight : portfolioPhoto} alt='portfolio photo' />
        </PhotoWrapper>
        <TextWrapper>
          <div className='description'>
            <p>Hello, my name is:</p>
            <h1>Marcin Wrzoś</h1>
            <p>Currently, I work as a Technical Leader at Axa XL. On a daily basis I am responsible for process automation. Some time ago, I made a decision to change my career path to IT. I do not have commercial experience, however I am still making new projects on my own. I am a person who is characterized by a 'can-do' attitude and I am always trying to overcome the issue on my own. I am able to write responsive pages in React or Javascript in line with the newest standards and REST API. Presently, I am focused on making React projects into my personal portfolio and learning Typescript.
            </p>
          </div>

          <div className='technologies'>
            <h1>Technologies</h1>
            <p>Here are some technologies I have been working with:</p>
            <ul>
              {technologies.map((item) => {
                const {id, technology, icon} = item;
                return (
                  <li key={id}>
                    {icon}
                    <p>{technology}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </TextWrapper>
      </StyledAbout>
    </Motion>
  );
}

export default About;