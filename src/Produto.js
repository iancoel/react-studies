import React from 'react';
import { useLocation, useParams } from 'react-router';

const Produto = () => {
  const params = useParams();
  const location = useLocation();
  const search = new URLSearchParams(location.search);

  return (
    <div>
      <h1>Produto</h1>
      <h2>{params.id}</h2>
    </div>
  );
};

export default Produto;
