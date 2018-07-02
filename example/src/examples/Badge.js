import React from 'react';

import {
  Content,
  Badge,
  Heading,
} from 'radargovernamental-design-system';

export default () => (
  <Content>
    <Heading level={1} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
    <Heading level={2} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
    <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
    <Heading level={4} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
    <Heading level={5} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
    <Heading level={6} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
    <hr />
    <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>Default</Badge></Heading>
    <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge primary>Primary</Badge></Heading>
    <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge success>Success</Badge></Heading>
    <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge warning>Warning</Badge></Heading>
    <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge danger>Danger</Badge></Heading>
    <hr />
    <Heading level={1} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge pill>1</Badge></Heading>
    <Heading level={2} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge primary pill>2</Badge></Heading>
    <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge success pill>30</Badge></Heading>
    <Heading level={4} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge warning pill>100</Badge></Heading>
    <Heading level={5} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge danger pill>90</Badge></Heading>
    <Heading level={6} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge danger pill>90</Badge></Heading>
  </Content>
);
