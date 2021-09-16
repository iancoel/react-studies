import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const activeStyle = {
    background: '#ddd',
  };

  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            className={`${styles.link}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={`${styles.link}`}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/contato"
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
