import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const activeStyle = {
    background: '#eee',
  };

  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink
            className={styles.link}
            to="/"
            activeClassName={styles.active}
            activeStyle={activeStyle}
            end
          >
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            activeStyle={activeStyle}
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
