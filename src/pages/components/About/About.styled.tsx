import styled from 'styled-components';

export const StyledAbout = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  width: 70%;
  text-align: justify;
  padding: 20px 10px;

  @media (max-width: 900px) {
    width: 100%;
  }

  .description {
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h1 {
      margin-bottom: 10px;
    }
  }

  .technologies {
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    ul {
      width: 85%;
      justify-content: space-around;
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;

      li {
        text-align: center;
        list-style: none;
        font-size: 50px;
        width: 25%;
        margin-bottom: 10px;
        min-width: 100px;
      }
    }
  }
`;

export const PhotoWrapper = styled.div`
  width: 30%;
  min-width: 300px;
  text-align: center;
  margin-top: 20px;

  img {
    border-radius: 150px;
    border: 1px solid var(--border-color);
    object-fit: cover;
    height: 250px;
    width: 250px;

    @media (max-width: 400px) {
      height: 50%;
      width: 50%;
      min-height: 150px;
      min-width: 150px;
    }
  }
`;