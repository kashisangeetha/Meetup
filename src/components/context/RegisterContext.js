import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: 'Art And Culture',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  RegisterName: () => {},
  showError: false,
  UpdateError: () => {},
})
export default RegisterContext
