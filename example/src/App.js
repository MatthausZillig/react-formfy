import React from 'react'

import { useFormfy, Input } from 'react-formfy'
import 'react-formfy/dist/index.css'

const App = () => {
  const email = useFormfy('email')

  function handleSubmit(event) {
    event.preventDefault()
    if (email.validate()) {
      console.log('Enviar')
    } else {
      console.log('Não enviar')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='email'
        id='email'
        type='email'
        placeholder='email'
        {...email}
      />
      <button>Enviar</button>
    </form>
  )
}

export default App
