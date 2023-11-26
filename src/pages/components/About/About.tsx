import { GlobalContext } from "context/Globalstate";
import { useContext } from "react";
import { Motion } from "pages/Motion";
import { StyledAbout, TextWrapper, PhotoWrapper } from "./About.styled";
import portfolioPhoto from "img/profile/portfolio photo.png";
import portfolioPhotoNight from "img/profile/portfolio photo night.png";
import sassImg from "img/technologies/sass.png";
import typescriptImg from "img/technologies/typescript.png";
import webpackImg from "img/technologies/webpack.png";
import reactImg from "img/technologies/react.png";
import CssImg from "img/technologies/css.png";
import HtmlImg from "img/technologies/html.png";
import javascriptImg from "img/technologies/javascript.png";
import githubImg from "img/technologies/github.png";
import githubDarkImg from "img/technologies/github dark mode.png";

interface TechnologyTypes {
  id: number;
  technology: string;
  icon: string;
}

const About: React.FC = () => {
  const { darkMode } = useContext(GlobalContext);

  const technologies: TechnologyTypes[] = [
    { id: 1, technology: "React", icon: reactImg },
    { id: 2, technology: "Typescript", icon: typescriptImg },
    { id: 3, technology: "Javascript", icon: javascriptImg },
    { id: 4, technology: "Github", icon: darkMode ? githubDarkImg : githubImg },
    { id: 5, technology: "HTML", icon: HtmlImg },
    { id: 6, technology: "CSS", icon: CssImg },
    { id: 7, technology: "Sass", icon: sassImg },
    { id: 8, technology: "Webpack", icon: webpackImg },
  ];

  return (
    <Motion>
      <StyledAbout>
        <PhotoWrapper>
          <img
            src={darkMode ? portfolioPhotoNight : portfolioPhoto}
            alt="portfolio pic"
          />
        </PhotoWrapper>
        <TextWrapper>
          <div className="description">
            <p>Hello, my name is:</p>
            <h1>Marcin Wrzoś</h1>
            <p>
              Currently, I work as a Technical Lead at Axa XL. In my current
              job, I am responsible for automating the process in VBA and other
              low-code applications such as Power Bi and Power Query. My next
              task is to run the meetings and present my solutions to the team
              and guide through the code or operational steps. I am a person who
              is characterized by a 'can-do' attitude and I am always trying to
              overcome the issue on my own. I build modern front-end
              applications in the react and typescript ecosystem, integrating
              with external REST API services.
            </p>
          </div>

          <div className="technologies">
            <h1>Technologies</h1>
            <p>Here are some technologies I have been working with:</p>
            <ul>
              {technologies.map((item) => {
                const { id, technology, icon } = item;
                return (
                  <li key={id}>
                    <img
                      src={icon}
                      width="100px"
                      height="90px"
                      alt={technology}
                    />
                    <p>{technology}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </TextWrapper>
      </StyledAbout>
    </Motion>
  );
};

export default About;
