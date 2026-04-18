import React from 'react'

export default function Navbar({name}) {
  return (
      <div className='nav'>
              <h2>Northstar</h2>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Sales</a></li>
          </ul>
          <p>Logged In: {name}</p>
    </div>
  )
}
