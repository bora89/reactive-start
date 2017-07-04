import React from 'react'
import {render} from  'react-dom';
import Main from './modules/main/main';
import './style.scss';
// material-ui
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Needed for onTouchTap
// This dependency is temporary and will eventually go away
injectTapEventPlugin();

class Layout extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    )
  }
}

const app = document.getElementById('root');
render(<Layout/>, app);
