import React from 'react';
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos.']}
        value={termos}
        setValue={setTermos}
      />

      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'PHP', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={['Laranja', 'Tangerina', 'Uva']}
        value={fruta}
        setValue={setFruta}
      />

      <Select
        options={['Smartphone', 'Tablet']}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
        required
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
