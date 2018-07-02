import React from 'react';

import '@storybook/addon-storysource/register';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';

import {
  Blockquote,
  Button,
  Content,
  Main,
  Heading,
  Sidebar,
  Spacer,
  Tag,
  TagAction,
  Text,
} from 'radargovernamental-design-system';


storiesOf('UI/Blockquote', module)
  .addDecorator(checkA11y)
  .add('with text', () => <Blockquote>Hello World</Blockquote>)
  .add('with children', () => <Blockquote>Hello <strong>World</strong></Blockquote>)
  .add('with color', () => <Blockquote danger>Hello World</Blockquote>)
  .add('with large text', () => (
    <section style={{ maxWidth: '400px' }}>
      <Blockquote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, beatae doloribus eaque eum facere maiores
        qui recusandae rem sed voluptatum! Cum dolorem esse et natus porro quam voluptates. Iure, mollitia?
      </Blockquote>
    </section>
  ));

storiesOf('UI/Button', module)
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
  .add('extra small', () => (<Button onClick={action('clicked')} xs>Hello Button</Button>));

storiesOf('UI/Content', module)
  .addDecorator(checkA11y)
  .add('simple', () => <Content>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, possimus?</Content>)
  .add('full height', () => (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, possimus?
      </Content>
    </div>
  ))
  .add('with right sidebar', () => (
    <Content sidebar>
      <Main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quis.</p>
      </Main>
      <Sidebar>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Omnis optio perspiciatis sapiente ut.</li>
          <li>Adipisci asperiores aut quisquam recusandae.</li>
          <li>Doloremque iusto mollitia neque voluptatibus?</li>
          <li>Amet excepturi inventore recusandae velit?</li>
        </ul>
      </Sidebar>
    </Content>
  ))
  .add('with left sidebar', () => (
    <Content sidebar>
      <Sidebar>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Omnis optio perspiciatis sapiente ut.</li>
          <li>Adipisci asperiores aut quisquam recusandae.</li>
          <li>Doloremque iusto mollitia neque voluptatibus?</li>
          <li>Amet excepturi inventore recusandae velit?</li>
        </ul>
      </Sidebar>
      <Main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quis.</p>
      </Main>
    </Content>
  ))
  .add('with left and right sidebar', () => (
    <Content sidebar>
      <Sidebar>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Omnis optio perspiciatis sapiente ut.</li>
          <li>Adipisci asperiores aut quisquam recusandae.</li>
          <li>Doloremque iusto mollitia neque voluptatibus?</li>
          <li>Amet excepturi inventore recusandae velit?</li>
        </ul>
      </Sidebar>
      <Main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quis.</p>
      </Main>
      <Sidebar>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Omnis optio perspiciatis sapiente ut.</li>
          <li>Adipisci asperiores aut quisquam recusandae.</li>
          <li>Doloremque iusto mollitia neque voluptatibus?</li>
          <li>Amet excepturi inventore recusandae velit?</li>
        </ul>
      </Sidebar>
    </Content>
  ));

storiesOf('UI/Heading', module)
  .addDecorator(checkA11y)
  .add('H1', () => <Heading level={1} title="Hello World">Hello World</Heading>)
  .add('H2', () => <Heading level={2} title="Hello World">Hello World</Heading>)
  .add('H3', () => <Heading level={3} title="Hello World">Hello World</Heading>)
  .add('H4', () => <Heading level={4} title="Hello World">Hello World</Heading>)
  .add('H5', () => <Heading level={5} title="Hello World">Hello World</Heading>)
  .add('H6', () => <Heading level={6} title="Hello World">Hello World</Heading>)
  .add('with color', () => <Heading level={1} title="Hello World" primary>Hello World</Heading>);

storiesOf('UI/Spacer', module)
  .addDecorator(checkA11y)
  .add('with margin', () => (
    <Spacer
      mtLg={10}
      mtMd={5}
      mtSm={2}
      mtXs={0}
      mrLg={10}
      mrMd={5}
      mrSm={2}
      mrXs={0}
      style={{ background: '#eee' }}
    >
      Hello World
    </Spacer>
  ))
  .add('with padding', () => (
    <Spacer
      ptLg={10}
      ptMd={0}
      prLg={10}
      prMd={0}
      style={{ background: '#eee' }}
    >
      Hello World
    </Spacer>
  ))
  .add('inline', () => (
    <div>
      <Spacer
        mrLg={2}
        inline
        style={{ background: '#eee' }}
      >
        Hello
      </Spacer>
      <Spacer
        mrLg={2}
        inline
        style={{ background: '#eee' }}
      >
        World
      </Spacer>
      <Spacer
        mrLg={2}
        inline
        style={{ background: '#eee' }}
      >
        !
      </Spacer>
    </div>
  ));

storiesOf('UI/Tag', module)
  .addDecorator(checkA11y)
  .add('with text', () => <Tag>Hello World</Tag>)
  .add('with primary color', () => <Tag primary>Hello World</Tag>)
  .add('with success color', () => <Tag success>Hello World</Tag>)
  .add('with warning color', () => <Tag warning>Hello World</Tag>)
  .add('with danger color', () => <Tag danger>Hello World</Tag>)
  .add('with action', () => <Tag action>Hello World <TagAction>x</TagAction></Tag>)
  .add('with action and color', () => <Tag primary action>Hello World <TagAction>x</TagAction></Tag>)
  .add('with action, color and size', () => (
    <div>
      <p><Tag lg primary action>Hello World <TagAction>x</TagAction></Tag></p>
      <p><Tag md primary action>Hello World <TagAction>x</TagAction></Tag></p>
      <p><Tag sm primary action>Hello World <TagAction>x</TagAction></Tag></p>
    </div>
  ))
  .add('large', () => <Tag lg>Hello World</Tag>)
  .add('medium/default', () => <Tag>Hello World</Tag>)
  .add('small', () => <Tag sm>Hello World</Tag>)
  .add('extra small', () => <Tag xs>Hello World</Tag>);

storiesOf('UI/Text', module)
  .addDecorator(checkA11y)
  .add('with text', () => <Text>Hello World</Text>)
  .add('with children', () => <Text>Hello <strong>World</strong></Text>)
  .add('with color', () => <Text danger>Hello World</Text>)
  .add('with ellipsis', () => (
    <div style={{ width: '100px' }}>
      <Text ellipsis>Lorem ipsum dolor sit amet.</Text>
    </div>
  ))
  .add('with many texts', () => (
    <section>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem cupiditate dicta distinctio dolor
        enim et, ipsum, maiores minus nam neque omnis quis saepe ut veniam? Corporis ipsa perspiciatis qui?
      </Text>
      <Text>
        Adipisci, aspernatur hic. Consequuntur deleniti iure porro vitae. Ab accusantium, aperiam, asperiores corporis
        cumque doloremque error eveniet excepturi hic illum minus mollitia nemo nesciunt nisi qui ratione recusandae
        sunt voluptate!
      </Text>
      <Text>
        Accusantium ad aliquam aut autem consequuntur cupiditate debitis, distinctio dolor eveniet
        facere fuga hic illum, modi mollitia nihil non nostrum obcaecati, officiis quibusdam quidem recusandae
        repudiandae sed sint vitae voluptatum.
      </Text>
    </section>
  ));
