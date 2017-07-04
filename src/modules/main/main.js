import React from 'react';
import './main.scss';

export default class Main extends React.Component {
    onClick () {
        console.log('This is your call-to-action, take it seriously');
    }

    render () {
        return (
            <div class="main-tab">
                <img class="app-logo" src={require('./logo.svg')} alt="app logo"/>
                <p>
                    This is the App demo
                    <br/>
                    Please add a short description of your App
                </p>
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
