import React, { Component } from 'react';

import {
  Container,
  Checkbox,
  FormBox,
  FormItem,
  FormLabel,
  FormRow,
  Radio,
  Spacer,
  Select,
  Textarea,
  Textfield,
} from 'radargovernamental-design-system';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      lastName: '',
      zipCode: '',
      address: '',
      number: '',
      complement: '',
      message: '',
      list: null,
      listMultiple: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    const {
      name,
      lastName,
      zipCode,
      address,
      number,
      complement,
      message,
      list,
      listMultiple,
    } = this.state;
    return (
      <Container>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem>
                <Textfield name="name" value={name} onChange={this.handleChange} />
                <FormLabel htmlFor="name">Name</FormLabel>
              </FormItem>
            </FormRow>
            <FormRow>
              <FormItem>
                <Textfield name="lastName" value={lastName} onChange={this.handleChange} />
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem lg={2} md={4} sm={6}>
                <Textfield name="zipCode" value={zipCode} onChange={this.handleChange} mask="99999-999" />
                <FormLabel htmlFor="zipCode">ZipCode</FormLabel>
              </FormItem>
              <FormItem lg={4} md={8} sm={6}>
                <Textfield name="address" value={address} onChange={this.handleChange} />
                <FormLabel htmlFor="address">Address</FormLabel>
              </FormItem>
              <FormItem lg={3} md={6}>
                <Textfield type="number" name="number" value={number} onChange={this.handleChange} />
                <FormLabel htmlFor="number">Number</FormLabel>
              </FormItem>
              <FormItem lg={3} md={6}>
                <Textfield name="complement" value={complement} onChange={this.handleChange} />
                <FormLabel htmlFor="complement">Complement</FormLabel>
              </FormItem>
            </FormRow>
          </FormBox>
        </Spacer>
        <Spacer mtLg={2} mtMd={2}>
          <FormBox>
            <FormRow>
              <FormItem>
                <Textarea name="message" value={message} onChange={this.handleChange} rows={1} />
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
                  value={list}
                  onChange={this.handleChange}
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
                  value={listMultiple}
                  onChange={this.handleChange}
                  multiple
                />
                <FormLabel htmlFor="listMultiple">List Multiple</FormLabel>
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
      </Container>
    );
  }
}
