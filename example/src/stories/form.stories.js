import React from 'react';

import '@storybook/addon-storysource/register';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import {
  Checkbox,
  Radio,
  Select,
  Textarea,
  Textfield,
} from 'radargovernamental-design-system';


storiesOf('Forms/Checkbox', module)
  .addDecorator(checkA11y)
  .add('with children', () => <Checkbox id="lorem" onChange={action('changed')}>Lorem <strong>Ipsum</strong></Checkbox>)
  .add('large', () => <Checkbox id="lorem" lg onChange={action('changed')}>Lorem Ipsum</Checkbox>)
  .add('medium/default', () => <Checkbox id="lorem" md onChange={action('changed')}>Lorem Ipsum</Checkbox>)
  .add('small', () => <Checkbox id="lorem" sm onChange={action('changed')}>Lorem Ipsum</Checkbox>)
  .add('extra small', () => <Checkbox id="lorem" xs onChange={action('changed')}>Lorem Ipsum</Checkbox>);

storiesOf('Forms/Radio', module)
  .addDecorator(checkA11y)
  .add('with children', () => <Radio id="lorem">Lorem <strong>Ipsum</strong></Radio>)
  .add('large', () => <Radio id="lorem" lg>Lorem Ipsum</Radio>)
  .add('medium/default', () => <Radio id="lorem" md>Lorem Ipsum</Radio>)
  .add('small', () => <Radio id="lorem" sm>Lorem Ipsum</Radio>)
  .add('extra small', () => <Radio id="lorem" xs>Lorem Ipsum</Radio>);


storiesOf('Forms/Select', module)
  .addDecorator(checkA11y)
  .add('with single selection', withNotes('Abstraction for: https://github.com/JedWatson/react-select')(() => (
    <Select
      onChange={action('changed')}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  )))
  .add('with multiple selection', withNotes('Abstraction for: https://github.com/JedWatson/react-select')(() => (
    <Select
      onChange={action('changed')}
      multiple
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  )));

storiesOf('Forms/Textarea', module)
  .addDecorator(checkA11y)
  .add('without value', () => <Textarea onChange={action('changed')} />)
  .add('with value', () => <Textarea value="Lorem ipsum dolor sit amet." onChange={action('changed')} />)
  .add('large', () => <Textarea lg onChange={action('changed')} />)
  .add('medium/default', () => <Textarea md onChange={action('changed')} />)
  .add('small', () => <Textarea sm onChange={action('changed')} />)
  .add('extra small', () => <Textarea xs onChange={action('changed')} />);

storiesOf('Forms/Textfield', module)
  .addDecorator(checkA11y)
  .add('of type text', () => <Textfield type="text" onChange={action('changed')} />)
  .add('of type number', () => <Textfield type="number" onChange={action('changed')} />)
  .add('of type email', () => <Textfield type="email" onChange={action('changed')} />)
  .add('large', () => <Textfield lg onChange={action('changed')} />)
  .add('medium/default', () => <Textfield md onChange={action('changed')} />)
  .add('small', () => <Textfield sm onChange={action('changed')} />)
  .add('extra small', () => <Textfield xs onChange={action('changed')} />);
