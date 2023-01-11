import styled from 'styled-components';

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
  border: 1px solid red;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255,0,0, 0.5);

  span {
    font-size: 15px;
    padding-left: 5px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;

  input {
    width: 250px;
    height: 30px;
    border-radius: 50px;
    border: 2px solid var(--skill-color-day);
    padding-left: 10px;
    margin-top: 10px;
    outline: none;
  }

  textarea {
    margin: 10px 0;
    width: 250px;
    height: 200px;
    border-radius: 50px;
    padding: 15px;
    resize: none;
    font-size: 15px;
    border: 2px solid var(--skill-color-day);
    outline: none;
  }
`; 

export const FormButton = styled.button`
  height: 40px;
  width: 70px;
  background-color: rgba(0,0,0,0);
  border-radius: 60px;
  font-size: 20px;
  border-color: var(--skill-color-day);
  cursor: pointer;
  color: var(--skill-color-day);

  &:hover {
    background-color: var(--skill-color-day);
    color: white;
  }
`;