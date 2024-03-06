import { Link } from "@mui/material";
import { AiFillGithub, AiOutlineDesktop } from "react-icons/ai";

interface Project {
  id: number;
  title: string;
  page?: string;
  github: string;
  description: string;
  techStack: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Foodie",
      page: "https://foodie-reactapp.netlify.app/",
      github: "https://github.com/Marcinwrzs/Foodie",
      description:
        "Foodie is an application that communicates via HTTP with the external Spoonacular API, providing a repository of recipes. It seamlessly integrates with a secure backend server for user registration and authentication. With Foodie, users can discover popular recipes, rate them, search by category or name, view detailed recipe information, and build a collection of favorites.",
      techStack: ["React", "Typescript", "Context API", "React Slick"],
    },
    {
      id: 2,
      title: "Portfolio",
      page: "https://marcinwrzs.github.io/Portfolio/",
      github: "https://github.com/Marcinwrzs/Portfolio",
      description: "Application which depicts my resume.",
      techStack: ["React", "Typescript", "MUI"],
    },
    {
      id: 3,
      title: "Blackjack",
      github: "https://github.com/Marcinwrzs/Blackjack.git",
      description: "Project is a copy of a card game called Blackjack",
      techStack: ["OOP Javascript", "SCSS"],
    },
  ];

  return (
    <>
      <h5>Projects:</h5>
      {projects.map((project) => {
        const { id, title, github, description, techStack, page } = project;
        return (
          <div key={id} style={{ marginTop: "20px" }}>
            <p style={{ color: "var(--header-color)" }}>{title}</p>
            <div>
              <Link href={github} style={{ color: "white" }}>
                <AiFillGithub style={{ marginRight: "15px" }} />
              </Link>
              <Link href={page} style={{ color: "white" }}>
                <AiOutlineDesktop />
              </Link>
            </div>
            <p style={{ margin: "10px 0", textAlign: "justify" }}>
              {description}
            </p>
            {techStack && (
              <div>
                {techStack.map((technology, index) => (
                  <span
                    key={index}
                    style={{
                      marginRight: "5px",
                      color: "var(--technology-color)",
                    }}
                  >
                    • {technology}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Projects;
