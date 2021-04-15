//Joan David Suarez Rendon - 1828989
import React from 'react';
import ReactDOM from 'react-dom';
import Operador from './components/operador'

const divRoot = document.querySelector('#root');

ReactDOM.render(<Operador numUno={8} numDos={3} cadena="Joan Suarez" />, divRoot);
