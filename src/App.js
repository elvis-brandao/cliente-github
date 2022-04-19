// const logo = require('./logo.svg');
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BemVindo from './components/BemVindo';
import NavBar from './components/NavBar'

function App() {
  const caminhos = [
    {
      id: 1,
      caminho: '/',
      titulo: 'Página inicial'
    },
    {
      id: 2,
      caminho: '/perfil',
      titulo: 'Perfil'
    },
    {
      id: 3,
      caminho: '/repositorios',
      titulo: 'Repositórios'
    },
    {
      id: 4,
      caminho: '/busca',
      titulo: 'Busca'
    }
  ];

  const [num, setNum] = useState(1);
  const aumentaNum = () => setNum(num + 1);

  return (
    <div >
      <NavBar menu={caminhos}  />
      <h1>{num}</h1><button onClick={aumentaNum}>Clique</button>
      <BemVindo meuNome="Léo"></BemVindo>
      <BemVindo meuNome="Lígia"/>
      <BemVindo />
      <BemVindo />
      <BemVindo />
      <BemVindo />
    </div>
  );
}

export default App;
//module.exports = App;
