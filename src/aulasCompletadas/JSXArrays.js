import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const produtosFiltrados = produtos.filter(
  (produto) => Number(produto.preco.replace('R$ ', '')) > 1500,
);

const JSXArrays = () => {
  return (
    <div>
      <ul>
        {produtosFiltrados.map((produto) => (
          <li key={produto.nome}>
            <h1>{produto.nome}</h1>
            <p>Preço: {produto.preco}</p>
            <ul>
              {produto.cores.map((cor) => (
                <li
                  style={{
                    listStyle: 'none',
                    color: '#000',
                    backgroundColor: cor,
                  }}
                  key={cor}
                >
                  {cor}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JSXArrays;
