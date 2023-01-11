import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    @media (max-width: 900px) {
      font-size: 25px;
    }

    @media (max-width: 385px) {
      font-size: 23px;
    }
  }

`;

export const StyledProjects = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  .link-container {
    height: 60px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    
    a {
      color: black;
    }
  }

  p:nth-child(odd) {
    padding-top: 10px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledProject = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  margin-top: 20px;
  
  h2 {
    text-align: center;
  }
  
  img {
    margin: 10px 0;
    height: 250px;
    width: 250px;
    border-radius: 100px;
    border: 1px solid var(--border-color);
    object-fit: cover;

    @media (max-width: 400px) {
      width: 80%;
      height: auto;
    }
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;