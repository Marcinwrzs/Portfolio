import {GlobalContext} from 'context/Globalstate';
import {useContext} from 'react';
import Motion from 'pages/Motion';
import portfolioPhoto from 'img/portfolio photo.png';
import portfolioPhotoNight from 'img/portfolio photo night.png';
import { StyledAbout, TextWrapper, PhotoWrapper } from './About.styled';

const About = () => {

  const {isOpen, darkMode} = useContext(GlobalContext);

  const technologies = [
    {id: 1, technology: 'React'},
    {id: 2, technology: 'JavaScript'},
    {id: 3, technology: 'HTML'},
    {id: 4, technology: 'CSS'},
    {id: 5, technology: 'REST API'},
    {id: 6, technology: 'Github'},
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
            <p>Currently, I work as a Technical Leader at Axa XL. On a daily basis I am responsible for process automation in various technologies and looking for a constant improvement of the work. Some time ago, I made a decision to change my career path to IT. I am able to write responsive pages in React or Javascript in line with the newest standards and REST API. Presently, I am focused on making React projects into my personal portfolio and learning Typescript.</p>
          </div>

          <div className='technologies'>
            <h1>Technologies</h1>
            <p>Here are some technologies I have been working with:</p>
            <ul>
              {technologies.map((item) => {
                const {id, technology} = item;
                return (
                  <li key={id}>{technology}</li>
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