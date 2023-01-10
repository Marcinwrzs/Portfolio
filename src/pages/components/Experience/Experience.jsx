import Motion from 'pages/Motion';
import 'index.css'
import { StyledExperience, StyledPosition } from './Experience.styled'

const Experience = () => {

  const experience = [
    {
      id: 1,
      company: 'AXA XL',
      role: 'Technical Lead, Broker Accreditation Analyst', 
      tasks: ['Building  and Improving process areas',
      'Coordinating process improvement initiatives',
      'Supporting the team in the Production of Broker Risk Reviews']
    },
    {
      id: 2,
      company: 'Factor Law',
      role: 'Analyst, Senior Financial Services Operations', 
      tasks: ['Improving the process by VBA', 'Coordinating the work allocation across the Negotiator teams ']
    },
    {
      id: 3,
      company: 'Credit Suisse',
      role: 'Security and Pricing Data Management Specialist',
      tasks: ['Maintaining data of financial instruments and their prices', 'Delivering the security and pricing data']
    },
    {
      id: 4,
      company: 'UBS',
      role: 'Data & Document Specialist', 
      tasks: ['Providing customer service and support to Client Advisors and Front Office ']
    },
    {
      id: 5,
      company: 'BNY Mellon',
      role: 'Junior Representative, Reconciliation', 
      tasks: ['Data investigation using information from different vendors',
      'Reconciliation against broker/custodian statements']
    },
  ];

  return (
    <Motion>
      <StyledExperience>
        <h1>Where I have worked:</h1>
        {experience.map((item) => {
          const {id, company, role, tasks} = item;
          return (
            <StyledPosition key={id}>
            <h2>{company}</h2>
            <h3>{role}</h3>
            <ul>
              {tasks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </StyledPosition>
          )
        })}
      </StyledExperience>
    </Motion>
  );
};

export default Experience;