import React from 'react';
import './main.scss';
import RaisedButton from 'material-ui/RaisedButton';

export default class Main extends React.Component {
  onClick() {
    console.log('This is your call-to-action, take it seriously');
  }

  render() {
    return (
      <div>
        <div class="container-fluid">

          <div class="row mb-4 mt-4">
            <img class="app-logo mx-auto" src={require('./logo.svg')} alt="app logo"/>
          </div>

          <div class="row justify-content-md-center mb-4">
            <div class="col-3 col-lg-2">
              Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <div class="col-6">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus.
            </div>

            <div class="col-3 col-lg-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Sed porttitor lectus nibh.
            </div>
          </div>

          <div class="row">
            <RaisedButton class="mx-auto" label="Cool Button" primary={true} onTouchTap={ (obj) => {
              alert('You just clicked the button!');
            }}/>
          </div>
        </div>

      </div>
     )
  }
}
