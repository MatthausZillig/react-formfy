import React, { Fragment } from 'react'

const types = {
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: 'Cep inválido'
  },
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido'
  },
  password: {
    regex: /^[^\W_]{4}$/,
    message: 'Senha inválida'
  },
  cellphone: {
    regex: /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/,
    message: 'Telefone inválido'
  }
}

export const useFormfy = (type, formTypes) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)
  const theTypes = formTypes || types

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (theTypes[type] && !theTypes[type].regex.test(value)) {
      setError(theTypes[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value)
  }
}

export const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  )
}
