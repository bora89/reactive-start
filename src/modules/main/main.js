import React from 'react';
import './main.scss';

import RaisedButton from 'material-ui/RaisedButton';

export default class Main extends React.Component {
  onClick() {
    console.log('This is your call-to-action, take it seriously');
  }

  render() {
    return (
      <div class="main-tab">
        <img class="app-logo" src={require('./logo.svg')} alt="app logo"/>
        <p>
          This is the App demo
          <br/>
          Please add a short description of your App
        </p>

        <RaisedButton label="Cool Button" primary={true} onTouchTap={ (obj) => {
          alert('You just clicked the button!');
        }}/>

        <div class="main-bottom">
          <hr class="divider-long"/>
          <p>
            ReactiveStart 2017
          </p>
        </div>
      </div>
    )
  }
}
