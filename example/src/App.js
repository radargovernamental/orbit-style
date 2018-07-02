import React from 'react';

import {
  Content,
  Tag,
  TagAction,
} from 'radargovernamental-design-system';

import 'radargovernamental-design-system/src/styles/generic/_generic.scss';

export default () => (
  <Content>
    <p>
      <Tag>Lorem ipsum dolor.</Tag> <Tag>Culpa, recusandae, vero?</Tag>
    </p>
    <p>
      <Tag action>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag primary>Lorem ipsum dolor.</Tag> <Tag primary>Culpa, recusandae, vero?</Tag>
    </p>
    <p>
      <Tag primary action>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag success>Lorem ipsum dolor.</Tag> <Tag success>Culpa, recusandae, vero?</Tag>
    </p>
    <p>
      <Tag success action>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag warning>Lorem ipsum dolor.</Tag> <Tag warning>Culpa, recusandae, vero?</Tag>
    </p>
    <p>
      <Tag warning action>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag danger>Lorem ipsum dolor.</Tag> <Tag danger>Culpa, recusandae, vero?</Tag>
    </p>
    <p>
      <Tag danger action>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag lg>Lorem.</Tag> <Tag md>Tenetur!</Tag> <Tag sm>Velit.</Tag> <Tag xs>Enim!</Tag>
    </p>
    <p>
      <Tag action lg>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag action md>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag action sm>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
    <p>
      <Tag action xs>Lorem ipsum dolor. <TagAction>x</TagAction></Tag>
    </p>
  </Content>
);
