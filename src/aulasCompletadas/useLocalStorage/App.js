import React from 'react';
import useLocalStorage from './useLocalstorage';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div>
      <p>Produto preferido: {produto}</p>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default App;
