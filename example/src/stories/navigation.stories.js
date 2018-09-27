/* eslint-disable max-len */
import React from 'react';

import '@storybook/addon-storysource/register';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import {
  StepNavigatorItem,
  StepNavigator,
} from 'orbit-style';


storiesOf('Navigation/StepNav', module)
  .addDecorator(checkA11y)
  .add('with active item', () => (
    <StepNavigator currentStep={1}>
      <StepNavigatorItem number={1} label="First Item" active />
      <StepNavigatorItem number={2} label="Second Item" />
      <StepNavigatorItem number={3} label="Third Item" />
    </StepNavigator>
  ))
  .add('with done item', () => (
    <StepNavigator currentStep={2}>
      <StepNavigatorItem number={1} label="First Item" done />
      <StepNavigatorItem number={2} label="Second Item" active />
      <StepNavigatorItem number={3} label="Third Item" />
    </StepNavigator>
  ))
  .add('with many done items', () => (
    <StepNavigator currentStep={3}>
      <StepNavigatorItem number={1} label="First Item" done />
      <StepNavigatorItem number={2} label="Second Item" done />
      <StepNavigatorItem number={3} label="Third Item" active />
    </StepNavigator>
  ))
  .add('with many items', () => (
    <StepNavigator currentStep={4}>
      <StepNavigatorItem number={1} label="First Item" done />
      <StepNavigatorItem number={2} label="Second Item" done />
      <StepNavigatorItem number={3} label="Third Item" done />
      <StepNavigatorItem number={4} label="Fourth Item" active />
      <StepNavigatorItem number={5} label="Fifth Item" />
    </StepNavigator>
  ));
