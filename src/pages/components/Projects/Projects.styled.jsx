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
  flex-direction: column;
  align-items: center;
  
  p:nth-child(odd) {
    padding-top: 10px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledProject = styled.div`
  box-shadow: 1px 1px 5px gray;
  border-radius: 10px;
  margin: 15px 0;
  width: 100%;
  max-width: 1000px;
  
  background-color: ${({ darkMode }) => darkMode ? 'var(--background-section-night)' : 'var(--font-color-night)'};
  padding: 10px 5px;

  h2 {
    text-align: center;
    padding-bottom: 10px;
  }

  .container {
    display: flex;

    @media (max-width: 1000px) {
      flex-direction: column;
      width: 100%;
    }

    .container-photo {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media (max-width: 1000px) {
        width: 100%;
      }
  
      img {
        height: 250px;
        width: 250px;
        border-radius: 2%;
        box-shadow: 1px 1px 5px gray;
        object-fit: cover;
  
        @media (max-width: 400px) {
          width: 80%;
          height: auto;
        }
      }

      ul {
        display: flex;
        justify-content: space-around;
        height: 40px;
        align-items: center;

        li {
          list-style: none;
          margin: 0 15px;

          a {
            color: black;
            display: block;
            height: 100%;
            width: 100%;
            background-color: var(--skill-color-day);
            color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
            border-radius: 20px;
            padding: 5px;
            display: flex;
            align-items: center;
            font-weight: bold;
          }

          svg {
            color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
            margin-right: 5px;
          }

          a:hover {
            background-color: var(--border-color);
          }
        }
      }
    }

    .container-description {
      padding: 0 10px;
      width: 60%;
      display: flex;
      flex-direction: column;
  
      @media (max-width: 1000px) {
        width: 100%;
      }
    }
  }
`;
