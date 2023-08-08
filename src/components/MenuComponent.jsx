import React from 'react'
import { Link } from 'react-router-dom'

export function MenuComponent() {
  return (
    <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/batata'}>Batata</Link></li>
    </ul>
  )
}
