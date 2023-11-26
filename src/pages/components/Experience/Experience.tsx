import { Motion } from "pages/Motion";
import "index.css";
import { StyledExperience, StyledPosition } from "./Experience.styled";

interface Task {
  id: number;
  company: string;
  role: string;
  tasks: string[];
}

const Experience: React.FC = () => {
  const experience: Task[] = [
    {
      id: 1,
      company: "AXA XL",
      role: "Technical Lead",
      tasks: [
        "Process automation in VBA and low-code applications such as Power Query",
        "Coordinating process improvement initiatives",
        "Run the meetings and presenting developed solutions to the team, guiding through the code",
      ],
    },
    {
      id: 2,
      company: "Factor Law",
      role: "Senior Financial Analyst",
      tasks: [
        "Improving the process by VBA",
        "Coordinating the work allocation across the Negotiator teams ",
      ],
    },
    {
      id: 3,
      company: "Credit Suisse",
      role: "Security and Pricing Data Management Specialist",
      tasks: [
        "Maintaining data of financial instruments and their prices",
        "Delivering the security and pricing data",
      ],
    },
    {
      id: 4,
      company: "UBS",
      role: "Data & Document Specialist",
      tasks: [
        "Providing customer service and support to Client Advisors and Front Office ",
      ],
    },
    {
      id: 5,
      company: "BNY Mellon",
      role: "Junior Representative, Reconciliation",
      tasks: [
        "Data investigation using information from different vendors",
        "Reconciliation against broker/custodian statements",
      ],
    },
  ];

  return (
    <Motion>
      <StyledExperience>
        <h1>My experience:</h1>
        {experience.map((item: Task) => {
          const { id, company, role, tasks } = item;
          return (
            <StyledPosition key={id}>
              <h2>{company}</h2>
              <h3>{role}</h3>
              <ul>
                {tasks.map((task: string, index: number) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </StyledPosition>
          );
        })}
      </StyledExperience>
    </Motion>
  );
};

export default Experience;
