import React from 'react';

import '@storybook/addon-storysource/register';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import {
  Checkbox,
  Datepicker,
  FormBox,
  FormItem,
  FormLabel,
  FormRow,
  Grid,
  Radio,
  Select,
  Spacer,
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

storiesOf('Forms/Datepicker', module)
  .addDecorator(checkA11y)
  .add('with date', () => <Datepicker id="lorem" onChange={action('changed')} />)
  .add('with time', () => <Datepicker id="lorem" lg onChange={action('changed')} withTime withDate={false} />)
  .add('with date and time', () => <Datepicker id="lorem" md onChange={action('changed')} withTime />);

storiesOf('Forms/FormBox', module)
  .addDecorator(checkA11y)
  .add('with one column', () => (
    <FormBox>
      <FormRow>
        <FormItem>
          <Textfield name="name" onChange={action('changed')} />
          <FormLabel htmlFor="name">Name</FormLabel>
        </FormItem>
      </FormRow>
    </FormBox>
  ))
  .add('with two columns', () => (
    <FormBox>
      <FormRow>
        <FormItem>
          <Textfield name="name" onChange={action('changed')} />
          <FormLabel htmlFor="name">Name</FormLabel>
        </FormItem>
        <FormItem>
          <Textfield name="lastName" onChange={action('changed')} />
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
        </FormItem>
      </FormRow>
    </FormBox>
  ))
  .add('with columns of different sizes', () => (
    <FormBox>
      <FormRow>
        <FormItem lg={2} md={4} sm={6}>
          <Textfield name="zipCode" onChange={action('changed')} />
          <FormLabel htmlFor="zipCode">ZipCode</FormLabel>
        </FormItem>
        <FormItem lg={4} md={8} sm={6}>
          <Textfield name="address" onChange={action('changed')} />
          <FormLabel htmlFor="address">Address</FormLabel>
        </FormItem>
        <FormItem lg={3} md={6}>
          <Textfield type="number" name="number" onChange={action('changed')} />
          <FormLabel htmlFor="number">Number</FormLabel>
        </FormItem>
        <FormItem lg={3} md={6}>
          <Textfield name="complement" onChange={action('changed')} />
          <FormLabel htmlFor="complement">Complement</FormLabel>
        </FormItem>
      </FormRow>
    </FormBox>
  ))
  .add('with many boxes and rows', () => (
    <Grid fluid>
      <Spacer mtLg={2} mtMd={2}>
        <FormBox>
          <FormRow>
            <FormItem>
              <Textfield name="name" onChange={action('changed')} />
              <FormLabel htmlFor="name">Name</FormLabel>
            </FormItem>
          </FormRow>
          <FormRow>
            <FormItem>
              <Textfield name="lastName" onChange={action('changed')} />
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
            </FormItem>
          </FormRow>
        </FormBox>
      </Spacer>
      <Spacer mtLg={2} mtMd={2}>
        <FormBox>
          <FormRow>
            <FormItem>
              <Textarea name="message" onChange={action('changed')} rows={1} />
              <FormLabel htmlFor="message">Message</FormLabel>
            </FormItem>
          </FormRow>
        </FormBox>
      </Spacer>
      <Spacer mtLg={2} mtMd={2}>
        <FormBox>
          <FormRow>
            <FormItem>
              <Select
                name="list"
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
              />
              <FormLabel htmlFor="list">List</FormLabel>
            </FormItem>
            <FormItem>
              <Select
                name="listMultiple"
                options={[
                  { label: 'Option 1', value: '1' },
                  { label: 'Option 2', value: '2' },
                  { label: 'Option 3', value: '3' },
                ]}
                multiple
              />
              <FormLabel htmlFor="listMultiple">List Multiple</FormLabel>
            </FormItem>
          </FormRow>
          <FormRow>
            <FormItem>
              <Select
                name="listSource"
                async
                asyncData={(inputValue) => {
                  const data = [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }];
                  return new Promise((resolve) => {
                    setTimeout(
                      () => resolve(data.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))),
                      1000,
                    );
                  });
                }}
                loadingMessage={() => 'Carregando..'}
                noOptionsMessage={() => 'Não encontrado.'}
              />
              <FormLabel htmlFor="listSource">List external source</FormLabel>
            </FormItem>
            <FormItem>
              <Select
                multiple
                name="listSourceMultiple"
                async
                asyncData={(inputValue) => {
                  const data = [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }];
                  return new Promise((resolve) => {
                    setTimeout(
                      () => resolve(data.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))),
                      1000,
                    );
                  });
                }}
              />
              <FormLabel htmlFor="listSourceMultiple">List external source multiple</FormLabel>
            </FormItem>
          </FormRow>
          <FormRow>
            <FormItem isActive>
              <Spacer mrLg={4} inline>
                <Checkbox id="arquived">Archived</Checkbox>
              </Spacer>
              <Checkbox id="not_arquived">Not Archived</Checkbox>
              <FormLabel htmlFor="archiving">Archiving</FormLabel>
            </FormItem>
            <FormItem isActive>
              <Spacer mrLg={4} inline>
                <Radio id="radio1" name="radio">Radio 1</Radio>
              </Spacer>
              <Radio id="radio2" name="radio">Radio 2</Radio>
              <FormLabel htmlFor="radio">Radio</FormLabel>
            </FormItem>
          </FormRow>
        </FormBox>
      </Spacer>
      <Spacer mtLg={2} mtMd={2}>
        <FormBox>
          <FormRow>
            <FormItem>
              <Datepicker
                name="date"
                onChange={this.handleChange} options={{
                  dateFormat: 'd/m/Y',
                }}
              />
              <FormLabel htmlFor="date">Some date</FormLabel>
            </FormItem>
            <FormItem>
              <Datepicker
                name="time"
                options={{
                  altFormat: 'H:i',
                }}
                withTime
                withDate={false}
              />
              <FormLabel htmlFor="time">Some time</FormLabel>
            </FormItem>
            <FormItem>
              <Datepicker
                name="dateWithTime"
                options={{
                  dateFormat: 'F j, Y - H:i',
                }}
                withTime
              />
              <FormLabel htmlFor="dateWithTime">Some date with time</FormLabel>
            </FormItem>
          </FormRow>
        </FormBox>
      </Spacer>
    </Grid>
  ));

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
      value={{ label: 'Option 2', value: '2' }}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
      isFormBox={false}
    />
  )))
  .add('with multiple selection', withNotes('Abstraction for: https://github.com/JedWatson/react-select')(() => (
    <Select
      onChange={action('changed')}
      multiple
      value={[{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }]}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
      isFormBox={false}
    />
  )))
  .add('with external source', withNotes('Abstraction for: https://github.com/JedWatson/react-select')(() => (
    <Select
      name="listSource"
      async
      asyncData={(inputValue) => {
        const data = [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }, { value: 'c', label: 'C' }];
        return new Promise((resolve) => {
          setTimeout(
            () => resolve(data.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))),
            1000,
          );
        });
      }}
      isFormBox={false}
      loadingMessage={() => 'Carregando..'}
      noOptionsMessage={() => 'Não encontrado.'}
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
  .add('of type text', () => <Textfield type="text" onChange={action('changed')} value="Some text" />)
  .add('of type number', () => <Textfield type="number" onChange={action('changed')} />)
  .add('of type email', () => <Textfield type="email" onChange={action('changed')} />)
  .add('with mask', () => <Textfield name="zipCode" onChange={action('changed')} mask="99999-999" />)
  .add('large', () => <Textfield lg onChange={action('changed')} />)
  .add('medium/default', () => <Textfield md onChange={action('changed')} />)
  .add('small', () => <Textfield sm onChange={action('changed')} />)
  .add('extra small', () => <Textfield xs onChange={action('changed')} />);
