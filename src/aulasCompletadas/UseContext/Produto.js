import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  function handleClick() {
    global.setContar((contar) => contar + 1);
  }

  return (
    <div>
      Dono: {global.nome}
      <button onClick={handleClick}>{global.contar}</button>
    </div>
  );
};

export default Produto;
