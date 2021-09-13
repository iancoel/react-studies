import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('enviou');
    } else {
      console.log('não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" label="Nome" id="nome" {...nome} />

      <Input type="text" label="Sobrenome" id="sobrenome" {...sobrenome} />

      <Input
        type="text"
        label="CEP"
        id="cep"
        placeholder="00000-000"
        {...cep}
      />

      <Input type="email" label="E-mail" id="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};

export default App;
