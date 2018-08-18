import React from 'react';

import {
  Switch,
} from 'orbit-style';

import FormExample from './examples/FormExample';

export default class App extends React.Component {
  state = {
    checked: false,
  };

  render() {
    const { checked } = this.state;
    return (
      <div style={{ margin: '200px' }}>
        <Switch
          checked={checked}
          onChange={e => this.setState({ checked: e.target.checked })}
        />
      </div>
    );
  }
}
