import React from 'react'
import {render} from  'react-dom';
import Main from './modules/main/main';
import './style.scss';

class Layout extends React.Component {
  render() {
    return (
      <Main />
    )
  }
}

const app = document.getElementById('root');
render(<Layout/>, app);
