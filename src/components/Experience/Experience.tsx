import "index.css";

import { Grid } from "@mui/material";

interface Role {
  id: number;
  company?: string;
  timeFrame: string;
  roleName: string;
  intro?: string;
  tasks?: string[];
  techStack?: string[];
}

const Experience: React.FC = () => {
  const experience: Role[] = [
    {
      id: 0,
      company: "BCF Software",
      timeFrame: "Sep 2025 - present",
      roleName: "Full Stack Developer",
      intro:
        "Working across several parallel client projects — from serverless SaaS architecture to enterprise Java systems and process automation (RPA). See the Projects section for detailed case studies.",
    },
    {
      id: 1,
      company: "Exa22",
      timeFrame: "Feb 2024 - Aug 2025",
      roleName: "Frontend Developer",
      tasks: [
        "designed and developed a cloud-based telemetry system connecting devices to a web portal (React, TypeScript)",
        "designed and maintained interfaces for vending machines (“Kwiatomaty”) in React.js, including an admin panel for managing devices, products, and real-time payments (NATS)",
        "integrated frontend applications with AWS services (S3) for image storage and retrieval",
        "wrote unit tests for frontend applications using Jest",
      ],
      techStack: ["React", "TypeScript", "Redux", "AWS S3", "NATS", "Jest"],
    },
    {
      id: 2,
      timeFrame: "Jan 2018 - Jan 2024",
      roleName: "Non-IT Jobs in Investment Banking",
      tasks: [
        "process automation in VBA and Power BI",
        "supported daily financial operations and ensured accuracy in data reconciliation, reporting, and Excel-based tracking of key performance indicators",
      ],
      techStack: ["SQL", "VBA", "Power BI"],
    },
  ];

  return (
    <>
      <h5>Professional experience</h5>
      {experience.map((item) => {
        const { id, company, roleName, tasks, timeFrame, techStack, intro } =
          item;
        return (
          <div key={id} style={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3}>
                <p
                  style={{
                    display: "inline",
                    color: "var(--article-color)",
                    whiteSpace: "nowrap",
                  }}
                >
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
                {company && (
                  <p style={{ margin: "5px 0", color: "var(--company-color)" }}>
                    {company}
                  </p>
                )}
                {intro && <p style={{ margin: "5px 0" }}>{intro}</p>}
                {tasks && (
                  <div>
                    {tasks.map((task, index) => (
                      <p key={index} style={{ marginRight: "5px" }}>
                        • {task}
                      </p>
                    ))}
                  </div>
                )}
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
