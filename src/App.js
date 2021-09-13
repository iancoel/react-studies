import React from 'react';
import Card from 'react-bootstrap/Card';

const App = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$2600</Card.Title>
        <Card.Text>
          este é um texto Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Expedita reiciendis esse, repudiandae quasi sapiente dolore
          magni ab nihil maiores. Architecto quasi quo cupiditate at autem
          maxime ab laudantium, maiores aliquid.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default App;
