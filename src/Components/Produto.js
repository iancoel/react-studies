import React from 'react';
import styles from './Produto.module.css';

const Produto = () => {
  return (
    <div>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>2300</p>
      <button className={styles.comprar}>Comprar</button>
    </div>
  );
};

export default Produto;
