import React from 'react'
import Navbar from './Navbar'

export default function Header({name}) {
    return (
        <>
      <Navbar name={name} />
      <h1>Welcome back, {name}.</h1>
        </>
  )
}
