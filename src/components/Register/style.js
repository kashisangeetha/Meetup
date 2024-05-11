import styled from 'styled-components'

export const RegisterContainer = styled.div` 
  display: flex;
  flex-direction: row;
  min-height: 80vh;
  align-items: center;
  justify-content: center;
`
export const RegisterImg = styled.img`
  height: 400px;
  width: 400px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`
export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 32px;
  font-family: 'Roboto';
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Label = styled.label`
  color: #7b8794;
  font-size: 14px;
  font-family: 'Roboto';
`
export const Input = styled.input`
  color: #334155;
  width: 350px;
  font-family: 'Roboto';
`
export const Select = styled.select`
  color: #334155;
  width: 350px;
  font-family: 'Roboto';
  outline: none;
`
export const RegisterButton = styled.button`
  color: #334155;
  border: none;
  font-family: 'Roboto';
  background-color: #3b82f6;
  outline: none;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 16px;
  font-family: 'Roboto';
`
export default RegisterContainer
