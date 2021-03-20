//Joan David Suarez Rendon - 1828989
import Contador from './contador'
import React from 'react';
import ReactDOM from 'react-dom';

const divRoot = document.querySelector('#root');

ReactDOM.render(<Contador name="Joan Suarez" propNum={10} />, divRoot);
