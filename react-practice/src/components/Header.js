import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header class='header'>
        <h1>Task Tracker</h1>
        <Button color="green" text="Add"/>
    </header>
  )
}

export default Header