import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
        <ul>
            <li>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/terms">Terms</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/about">About</NavLink>
            </li>
        </ul>
    </>
  )
}
