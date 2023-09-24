import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 20px;
  text-align: left;
`;

export const FormInput = styled.input`
  margin-bottom: 20px;
  font-size: 15px;
  width: 300px;
  margin-top: 10px;
`;

export const AddButton = styled.button`
  margin-bottom: 20px;
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: skyblue;
  border-radius: 5px;
  border: none;
`;
