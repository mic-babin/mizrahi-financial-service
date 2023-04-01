import styled from "styled-components";

export const Form = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  color: #2b2929;
  padding: 5px 0;
  text-decoration: none;
  background-color: transparent;
  border: none;
  transition: all 0.2s ease-in;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #2b2929;
  padding: 1.35rem 2.2rem;
  background-color: #f7f7f1;
  margin-bottom: 22px;

  &:focus {
    border: 2px solid #2b2929;
    outline: none !important;
  }

  ::placeholder {
    font-size: 14px;
    letter-spacing: 2.8px;
    color: #2b2929;
    text-transform: uppercase;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;

  height: 300px;
  border: 1px solid #2b2929;
  padding: 1.35rem 2.2rem;
  background-color: #f7f7f1;
  margin-bottom: 30px;

  &:focus {
    border: 2px solid #2b2929;
    outline: none !important;
  }

  ::placeholder {
    font-size: 14px;
    letter-spacing: 2.8px;
    color: #2b2929;
    text-transform: uppercase;
  }
`;

export const Arrow = styled.img`
  margin-left: 7px;
  height: 12px;
`;
