import styled from 'styled-components';

interface FormtProps {
  darkMode: boolean;
}

export const FormWrapper = styled.div`
  margin: 0 auto;
  height: 460px;
  
  h2 {
    padding-top: 150px;
  }

  @media only screen and (max-width: 450px) {
    height: 380px;
  }
`;

export const ErrorPopup = styled.div`
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,0,0, 0.5);

  span {
    font-size: 15px;
    padding-left: 5px;
  }
`;

export const Form = styled.form<FormtProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  input {
    width: 250px;
    height: 30px;
    border-width: 0 0 2px 2px;
    border-color: ${({ darkMode }) => darkMode ? '#F5F5F5' : 'black'};
    background-color: rgba(0,0,0,0);
    padding-left: 10px;
    margin: 15px 0;
    outline: none;
  }

  textarea {
    margin: 10px 0;
    width: 250px;
    height: 200px;
    border-width: 0 0 2px 2px;
    border-color: ${({ darkMode }) => darkMode ? '#F5F5F5' : 'black'};
    background-color: rgba(0,0,0,0);
    padding: 15px;
    resize: none;
    font-size: 15px;
    outline: none;
  }
`; 

export const FormButton = styled.button`
  height: 40px;
  width: 70px;
  background-color: rgba(0,0,0,0);
  font-size: 20px;
  border-color: var(--skill-color-day);
  cursor: pointer;
  color: var(--skill-color-day);

  &:hover {
    background-color: var(--skill-color-day);
    color: white;
  }
`;