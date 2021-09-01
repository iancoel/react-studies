import React from 'react';

const DesafioHeader = () => {
  const { pathname } = window.location;
  const pathnameLogic = pathname === '/' ? pathname + 'produtos' : '/';

  return (
    <nav>
      <ul>
        <li>
          <a href={pathnameLogic}>Home</a>
        </li>
        <li>
          <a href={pathnameLogic}>Produtos</a>
        </li>
      </ul>
    </nav>
  );
};

export default DesafioHeader;
