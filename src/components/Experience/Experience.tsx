import "index.css";

import { Grid } from "@mui/material";

interface Tasks {
  id: number;
  task: string;
}

interface Role {
  id: number;
  company?: string;
  timeFrame: string;
  city?: string;
  roleName: string;
  tasks?: string[];
  techStack?: string[];
}

const Experience: React.FC = () => {
  const experience: Role[] = [
    {
      id: 0,
      company: "Exa22",
      timeFrame: "2024-present",
      city: "Krakow",
      roleName: "Junior frontend developer",
      tasks: [
        "developed in React with Typescript a cloud-based telemetry system, cleverly connecting machines with a web-based portal",
        "wrote tests for front-end applications using Jest",
        "designed and maintained interfaces for vending machines, such as “Kwiatomaty.” using React.js",
        "integrated front-end applications with AWS services, utilizing Amazon S3 for image retrieval",
        "collaborated closely with back-end developers to define API endpoints and application flow",
      ],
      techStack: ["React", "Typescript", "JEST", "AWS"],
    },
    {
      id: 1,
      company: "AXA XL",
      timeFrame: "2022-2023",
      city: "Wroclaw",
      roleName: "Technical Lead",
      tasks: [
        "process automation in VBA and low-code applications",
        "coordinating process improvement initiatives",
        "run the meetings and presenting solutions to the team",
      ],
      techStack: ["VBA", "Power Bi", "Power Query"],
    },
    {
      id: 2,
      timeFrame: "2018-2022",
      roleName: "Non-it jobs in financial industry",
    },
  ];

  return (
    <>
      <h5>Professional experience</h5>
      {experience.map((item) => {
        const { id, company, roleName, tasks, timeFrame, techStack, city } =
          item;
        return (
          <div key={id} style={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <p style={{ display: "inline", color: "var(--article-color)" }}>
                  {timeFrame}
                </p>
              </Grid>
              <Grid item xs={12} sm={9}>
                <p
                  style={{
                    margin: 0,
                    color: "var(--header-color)",
                    display: "inline",
                  }}
                >
                  {roleName}
                </p>
                <p style={{ margin: "5px 0", color: "var(--company-color)" }}>
                  {company}
                </p>
                <p style={{ margin: "5px 0", color: "var(--header-color)" }}>
                  {city}
                </p>
                <p style={{ margin: "5px 0" }}>
                  {" "}
                  {tasks && (
                    <div>
                      {tasks.map((task, index) => (
                        <p
                          key={index}
                          style={{
                            marginRight: "5px",
                            // color: "var(--technology-color)",
                          }}
                        >
                          • {task}
                        </p>
                      ))}
                    </div>
                  )}
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
              </Grid>
            </Grid>
          </div>
        );
      })}
    </>
  );
};

export default Experience;
