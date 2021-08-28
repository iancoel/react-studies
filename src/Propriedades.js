import React from 'react';

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ backgroundColor: cor, color: 'white' }}>
      {texto}, {children}
    </h1>
  );
};

const Propriedades = () => {
  return (
    <div>
      <Titulo cor="blue" texto="Primeiro Titulo">
        {' '}
        Isso é o children{' '}
      </Titulo>
      <Titulo cor="tomato" texto="Segundo Titulo" />
    </div>
  );
};

export default Propriedades;
