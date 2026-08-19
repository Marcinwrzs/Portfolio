interface SubProject {
  title: string;
  techStack: string[];
  bullets: string[];
}

interface Project {
  id: number;
  title: string;
  note?: string;
  description: string;
  techStack?: string[];
  bullets?: string[];
  subProjects?: SubProject[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "VML — SaaS platform for interactive, personalized video",
      description:
        "A martech SaaS platform for creating and distributing interactive, personalized video. Client-facing work delivered as part of a software house team — code and live demo are not public due to client confidentiality.",
      bullets: [
        "Developed core editor and backend features: project version history with cursor-based pagination in DynamoDB, a reusable widget library (full CRUD with an animation and trigger editor), and project merging with cross-project S3 asset migration.",
        "Worked on infrastructure: configured Terraform for a multi-region, multi-account AWS environment, resolved CI/CD pipeline blockers (GitHub Actions), and enabled structured logging and DynamoDB Streams for observability.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Node.js",
        "AWS Lambda",
        "DynamoDB",
        "Terraform",
        "GitHub Actions",
        "Jest",
      ],
    },
    {
      id: 2,
      title: "Remote Ally — IoT platform for remote video monitoring",
      note: "Live on the Apple App Store and Google Play",
      description:
        "An IoT platform for remote video monitoring and device fleet management across multiple physical locations. Client-facing work delivered as part of a software house team.",
      bullets: [
        "Involved in every stage of the project — frontend, backend, and infrastructure — including CI/CD and the mobile release process.",
        "Took part in publishing the app to the Apple App Store and Google Play: build signing, keystore management, and release automation via Codemagic (iOS) and GitHub Actions (Android).",
        "Designed environment configuration using AWS SSM Parameter Store as a contract between Terraform and CI/CD pipelines, keeping secrets out of the repository.",
        "Diagnosed and fixed a race condition on first user login and a stuck rolling deployment on ECS (resolved via dynamic port mapping).",
        "Direct client contact — gathering requirements, presenting solutions, aligning on release priorities.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Capacitor",
        "Python/FastAPI",
        "Terraform",
        "AWS (ECS, Cognito, IoT Core)",
        "Docker",
        "Codemagic",
      ],
    },
    {
      id: 3,
      title: "Public Sector — Document Workflow & Case Management System",
      description:
        "A system delivered for a public-sector client, operating under strict security and audit requirements — a legacy migration with a strong documentation component. Code and demo are not public due to the nature of the client.",
      bullets: [
        "Migrated a legacy system (PHP/MySQL) to a modern stack (Java 17/Spring Boot, Angular, PostgreSQL), deployed in a closed, air-gapped network with full role-based access control and audit logging.",
        "Implemented core workflow features, including document versioning, role-based field-level permissions, and case archiving.",
        "Authored technical and functional documentation, including a software license compliance review of all open-source dependencies.",
        "Contributed to several rounds of code quality improvements (SonarQube) across the codebase without breaking the API contract.",
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "Angular",
        "TypeScript",
        "PostgreSQL",
        "Docker",
        "GitLab CI",
        "Playwright",
      ],
    },
    {
      id: 4,
      title: "Kwiatomaty — vending machine platform & admin panel",
      description:
        "A cloud-connected platform for flower vending machines: a React interface running on the machines themselves plus an admin panel for managing devices, products, images, and language settings across the fleet, with real-time payment event handling.",
      bullets: [
        "Designed and maintained the machine-facing interface in React.js and the admin panel for managing devices, products, and content.",
        "Implemented real-time payment event handling and status updates using NATS for machine-to-backend communication.",
        "Integrated the frontend with AWS S3 for image retrieval and storage across the product catalog.",
        "Wrote unit tests (Jest) to keep the interface reliable across frequent releases.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Redux",
        "Sass",
        "AWS S3",
        "NATS",
        "Jest",
      ],
    },
  ];

  return (
    <>
      <h5>Projects:</h5>
      {projects.map((project) => {
        const {
          id,
          title,
          note,
          description,
          techStack,
          bullets,
          subProjects,
        } = project;
        return (
          <div key={id} style={{ marginTop: "24px" }}>
            <p style={{ color: "var(--header-color)", marginBottom: "4px" }}>
              {title}
            </p>
            {note && (
              <p
                style={{
                  margin: "0 0 8px 0",
                  color: "var(--role-color)",
                  fontSize: "13px",
                }}
              >
                {note}
              </p>
            )}
            <p style={{ margin: "10px 0", textAlign: "justify" }}>
              {description}
            </p>

            {bullets && (
              <div style={{ marginBottom: "8px" }}>
                {bullets.map((task, index) => (
                  <p key={index} style={{ margin: "4px 0" }}>
                    • {task}
                  </p>
                ))}
              </div>
            )}

            {techStack && (
              <div style={{ marginBottom: "8px" }}>
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

            {subProjects &&
              subProjects.map((sub, subIndex) => (
                <div
                  key={subIndex}
                  style={{ marginTop: "16px", marginLeft: "12px" }}
                >
                  <p
                    style={{
                      color: "var(--header-color)",
                      marginBottom: "4px",
                    }}
                  >
                    → {sub.title}
                  </p>
                  <div style={{ marginBottom: "8px" }}>
                    {sub.bullets.map((task, index) => (
                      <p key={index} style={{ margin: "4px 0" }}>
                        • {task}
                      </p>
                    ))}
                  </div>
                  <div>
                    {sub.techStack.map((technology, index) => (
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
                </div>
              ))}
          </div>
        );
      })}
    </>
  );
};

export default Projects;
