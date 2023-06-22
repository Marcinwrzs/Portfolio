import styled from 'styled-components';

interface StyledProjectProps {
  darkMode: boolean;
}

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

export const StyledProject = styled.div<StyledProjectProps>`
  box-shadow: 1px 1px 5px gray;
  margin: 15px 0;
  width: 100%;
  max-width: 800px;
  background-color: ${({ darkMode }) => darkMode ? 'var(--background-section-night)' : '#F5F5F5'};
  padding: 10px 5px;
  text-align: justify;
  
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
        width: 70%;
        display: flex;
        justify-content: space-between;

        li {
          list-style: none;

          a {
            color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
            display: flex;
            align-items: center;
            font-weight: bold;
            font-size: 17px;
          }

          svg {
            color: ${({ darkMode }) => darkMode ? 'var(--font-color-night)' : 'var(--font-color-day)'};
            margin-right: 5px;
          }

          a:hover {
            color: var(--border-color);
            
            svg {
              color: var(--border-color);
            }
          }
        }
      }
    }

    .container-description {
      padding: 0 15px 0 0;
      width: 60%;
      display: flex;
      flex-direction: column;
      
      p {
        font-size: 18px;

        &:nth-child(2) {
          padding-top: 20px;
        }
      }

      @media (max-width: 1000px) {
        width: 100%;
      }
    }
  }
`;