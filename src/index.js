import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from './Title';
import './style.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Mflix'
    };
  }

  render() {
    return (
      <div>
        <Title name={this.state.title} />
        <p>
          
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
