import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  background: ${({ cor }) => cor};
  color: white;
`;

const App = () => {
  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Esse é um título</Titulo>
          <Paragrafo>Esse é o texto</Paragrafo>
          <Preco cor="black">2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Esse é um título</Titulo>
          <Paragrafo>Esse é o texto</Paragrafo>
          <Preco cor="red">1500</Preco>
        </Produto>
      </ProdutosContainer>
    </div>
  );
};

export default App;
