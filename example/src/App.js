import React, { Component } from 'react'

import { Button, Container } from 'design-system'

export default class App extends Component {
  render () {
    return (
      <Container>
        <div>
          <Button>Normal</Button>
          <Button primary>Primary</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button danger>Danger</Button>
        </div>
        <div>
          <Button>Normal</Button>
          <Button primary outline>Primary</Button>
          <Button success outline>Success</Button>
          <Button warning outline>Warning</Button>
          <Button danger outline>Danger</Button>
        </div>
        <div>
          <Button lg>Large</Button>
          <Button md>Medium</Button>
          <Button sm>Small</Button>
          <Button xs>Extra Small</Button>
        </div>
      </Container>
    )
  }
}
