import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
        <ul>
            <li>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/fleamans-page/">Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/fleamans-page/terms">Terms</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) => (isActive ? "active" : null)} to="/fleamans-page/about">About</NavLink>
            </li>
        </ul>
    </>
  )
}
