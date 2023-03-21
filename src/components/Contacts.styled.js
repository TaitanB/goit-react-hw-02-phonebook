import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 30px;
  border-radius: 20px;
  background-color: rgb(163 213 196);
  align-items: center;

  > ul {
    padding-left: 20px;
    margin-top: 20px;
  }
`;

export const FormAddContact = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border: 1px solid rgb(11 120 8);
  border-radius: 20px;
  background-color: rgb(102 200 219);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  align-items: center;
`;

export const Input = styled.input`
  background-color: rgb(176 229 239);
  border: 1px solid rgb(11 120 8);
  border-radius: 5px;
  padding: 5px;
`;

export const BtnContact = styled.button`
  margin: auto;
  padding: 5px 10px;
  border: 1px solid rgb(11 120 8);
  border-radius: 5px;
  background-color: rgb(176 229 239);
  font-weight: 700;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), 0 0 20px rgba(0, 0, 0, 0.1),
    0 0 30px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.1),
    0 0 50px rgba(0, 0, 0, 0.1), 0 0 75px rgba(0, 0, 0, 0.1);

  :hover,
  :focus {
    background-color: rgb(11 120 8);
    color: rgb(176 229 239);
    scale: 0.9;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 10px;

  p {
    width: 360px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
