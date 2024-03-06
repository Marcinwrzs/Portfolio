import "index.css";

import { Grid } from "@mui/material";

interface Task {
  id: number;
  company?: string;
  timeFrame: string;
  role: string;
  task?: string;
  techStack?: string[];
}

const Experience: React.FC = () => {
  const experience: Task[] = [
    {
      id: 0,
      company: "Exa22",
      timeFrame: "2024-present",
      role: "Junior frontend developer",
      task: "Developing applications using React and Python technology",
      techStack: ["React", "Typescript", "Python"],
    },
    {
      id: 1,
      company: "AXA XL",
      timeFrame: "2022-2023",
      role: "Technical Lead",
      task: "Process automation in VBA and low-code applications such as Power Bi",
      techStack: ["VBA", "Power Bi", "Power Query"],
    },
    {
      id: 2,
      timeFrame: "2018-2022",
      role: "Non-it jobs in financial industry",
    },
  ];

  return (
    <>
      <h5>Professional experience</h5>
      {experience.map((item) => {
        const { id, company, role, task, timeFrame, techStack } = item;
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
                  {role}
                </p>
                <p style={{ margin: "5px 0" }}>{company}</p>
                <p style={{ margin: "5px 0" }}>{task}</p>
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
