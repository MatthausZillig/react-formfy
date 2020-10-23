# react-formfy

> Input status manager and form validation.

[![NPM](https://img.shields.io/npm/v/react-formfy.svg)](https://www.npmjs.com/package/react-formfy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-formfy
```

## Usage

```jsx
import React from 'react'

import { useFormfy, Input } from 'react-formfy'

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
```

## License

MIT © [MatthausZillig](https://github.com/MatthausZillig)
