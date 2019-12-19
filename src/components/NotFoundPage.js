import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h4>Página não encontrada!</h4>
      <Link to="/">Voltar para página inicial</Link>
    </div>
  );
};

export default NotFoundPage;
