import React from 'react';

const DesafioProdutos = () => {
  const estiloH1 = {
    color: '#00DDFF',
    fontSize: '1.5em',
  };

  const estiloLi = {
    listStyleType: 'none',
    border: '1px solid #000',
    width: '90vw',
    paddingLeft: '40px',
  };

  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb', 'i5'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb', 'i3'] },
  ];

  return (
    <div>
      <h1 style={estiloH1}>Produtos</h1>

      <ul>
        {produtos.map(({ nome, propriedades }) => (
          <li key={nome} style={estiloLi}>
            <p>{nome}</p>
            <ul>
              {propriedades.map((propriedade) => (
                <li key={propriedade}>{propriedade}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesafioProdutos;
