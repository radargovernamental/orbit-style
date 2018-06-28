import React from 'react';

import '@storybook/addon-storysource/register';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { checkA11y } from '@storybook/addon-a11y';

import { Button } from 'design-system'

storiesOf('Button', module)
  .addDecorator(checkA11y)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with primary color', () => (<Button onClick={action('clicked')} primary>Hello Button</Button>))
  .add('with danger color', () => (<Button onClick={action('clicked')} danger>Hello Button</Button>))
  .add('with warning color', () => (<Button onClick={action('clicked')} warning>Hello Button</Button>))
  .add('with outline', () => (<Button onClick={action('clicked')} outline>Hello Button</Button>))
  .add('with color and outline', () => (<Button onClick={action('clicked')} primary outline>Hello Button</Button>))
  .add('large', () => (<Button onClick={action('clicked')} lg>Hello Button</Button>))
  .add('medium/default', () => (<Button onClick={action('clicked')}>Hello Button</Button>))
  .add('small', () => (<Button onClick={action('clicked')} sm>Hello Button</Button>))
  .add('extra small', () => (<Button onClick={action('clicked')} xs>Hello Button</Button>))
