import styled from "styled-components";

export const StyledExperience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPosition = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  h3 {
    @media (max-width: 570px) {
      font-size: 14px;
    }
  }

  h2 {
    padding-bottom: 10px;
  }

  ul {
    width: 80%;
    list-style: none;
    padding-top: 10px;
    text-align: center;

    @media (max-width: 900px) {
      width: 80%;
      padding-left: 0;
    }

    @media (max-width: 700px) {
      width: 100%;
    }
    li {
      padding-top: 5px;

      &::before {
        content: "• ";
        color: var(--border-color);
      }
    }
  }
`;
