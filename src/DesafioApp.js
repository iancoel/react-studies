import React from 'react';
import DesafioHome from './DesafioHome';
import DesafioProdutos from './DesafioProdutos';

const DesafioAPP = () => {
  const { pathname } = window.location;
  let Component;

  if (pathname === '/') {
    Component = DesafioHome;
  } else {
    Component = DesafioProdutos;
  }

  return (
    <div>
      <Component />
    </div>
  );
};

export default DesafioAPP;
