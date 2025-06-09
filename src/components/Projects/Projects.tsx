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
      title: "Memory game",
      github: "https://github.com/Marcinwrzs/Memory-game",
      page: "https://memory-game-marcin.netlify.app",
      description:
        "The project is an implementation of a Memory game using React, TypeScript, and MobX. The player uncovers pairs of cards, trying to find matches in the shortest time possible.",
      techStack: ["React", "Typescript", "MobX"],
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

            <div style={{ display: "flex", gap: "20px", marginBottom: "10px" }}>
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "white",
                  backgroundColor: "var(--link-color)",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                <AiFillGithub size={20} />
                GitHub
              </Link>

              <Link
                href={page}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  color: "white",
                  backgroundColor: "var(--link-color)",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "12px",
                  cursor: "pointer",
                }}
              >
                <AiOutlineDesktop size={20} />
                Demo
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
