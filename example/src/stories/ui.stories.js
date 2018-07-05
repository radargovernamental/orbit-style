import React from 'react';

import '@storybook/addon-storysource/register';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { checkA11y } from '@storybook/addon-a11y';
import { withNotes } from '@storybook/addon-notes';

import {
  AlertModal,
  Badge,
  Blockquote,
  Button,
  Col,
  Grid,
  Content,
  ContentLoading,
  ConfirmModal,
  EmptyModal,
  Loading,
  Main,
  Heading,
  Row,
  Sidebar,
  Spacer,
  Tag,
  TagAction,
  Text,
} from 'radargovernamental-design-system';


storiesOf('UI/Badge', module)
  .addDecorator(checkA11y)
  .add('with text', () => (
    <div>
      <Heading level={1} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
      <Heading level={2} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
      <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
      <Heading level={4} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
      <Heading level={5} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
      <Heading level={6} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>New</Badge></Heading>
    </div>
  ))
  .add('with color', () => (
    <div>
      <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge>Default</Badge></Heading>
      <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge primary>Primary</Badge></Heading>
      <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge success>Success</Badge></Heading>
      <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge warning>Warning</Badge></Heading>
      <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge danger>Danger</Badge></Heading>
    </div>
  ))
  .add('with pill format', () => (
    <div>
      <Heading level={1} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge pill>1</Badge></Heading>
      <Heading level={2} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge primary pill>2</Badge></Heading>
      <Heading level={3} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge success pill>30</Badge></Heading>
      <Heading level={4} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge warning pill>100</Badge></Heading>
      <Heading level={5} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge danger pill>90</Badge></Heading>
      <Heading level={6} title="Lorem ipsum dolot">Lorem ipsum dolor <Badge danger pill>90</Badge></Heading>
    </div>
  ));

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

storiesOf('UI/Grid', module)
  .addDecorator(checkA11y)
  .add('with one column', () => (
    <Grid fluid>
      <Row>
        <Col xs>
          <div style={{ background: '#eee' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
          </div>
        </Col>
      </Row>
    </Grid>
  ))
  .add('with auto column', () => (
    <Grid fluid>
      <Row>
        <Col xs>
          <div style={{ background: '#eee' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
          </div>
        </Col>
        <Col xs>
          <div style={{ background: '#eee' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
          </div>
        </Col>
        <Col xs>
          <div style={{ background: '#eee' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
          </div>
        </Col>
      </Row>
      <Spacer mtLg={2}>
        <Row>
          <Col xs>
            <div style={{ background: '#eee' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
            </div>
          </Col>
          <Col xs>
            <div style={{ background: '#eee' }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
            </div>
          </Col>
        </Row>
      </Spacer>
    </Grid>
  ))
  .add('with different columns', () => (
    <Grid fluid>
      <Row>
        <Col xs={12} sm={3} md={2} lg={1}>
          <div style={{ background: '#eee' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
          </div>
        </Col>
        <Col xs={6} sm={6} md={8} lg={10}>
          <div style={{ background: '#eee' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
          </div>
        </Col>
        <Col xs={6} sm={6} md={2} lg={1}>
          <div style={{ background: '#eee' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, quis!
          </div>
        </Col>
      </Row>
    </Grid>
  ))
  .add('with horizontal alignment', () => (
    <Grid fluid>
      <Spacer mtLg={2}>
        <Row>
          <Col xs={12}>
            <Row start="xs">
              <Col xs={6}>
                <div style={{ background: '#eee' }}>
                  start=xs
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Spacer>
      <Spacer mtLg={2}>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={6}>
                <div style={{ background: '#eee' }}>
                  center=xs
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Spacer>
      <Spacer mtLg={2}>
        <Row>
          <Col xs={12}>
            <Row end="xs">
              <Col xs={6}>
                <div style={{ background: '#eee' }}>
                  end=xs
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Spacer>
    </Grid>
  ))
  .add('with vertical alignment', () => (
    <Grid fluid>
      <Spacer mtLg={2}>
        <Row top="xs">
          <Col xs={6}>
            <div style={{ background: '#eee' }}>
              top=xs
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ background: '#eee', height: '100px' }}>
              top=xs
            </div>
          </Col>
        </Row>
      </Spacer>
      <Spacer mtLg={2}>
        <Row middle="xs">
          <Col xs={6}>
            <div style={{ background: '#eee' }}>
              middle=xs
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ background: '#eee', height: '100px' }}>
              middle=xs
            </div>
          </Col>
        </Row>
      </Spacer>
      <Spacer mtLg={2}>
        <Row bottom="xs">
          <Col xs={6}>
            <div style={{ background: '#eee' }}>
              bottom=xs
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ background: '#eee', height: '100px' }}>
              bottom=xs
            </div>
          </Col>
        </Row>
      </Spacer>
    </Grid>
  ))
  .add('with distribution', () => (
    <Grid fluid>
      <Spacer mtLg={2}>
        <Row around="xs">
          <Col xs={2}>
            <div style={{ background: '#eee' }}>
              around=xs
            </div>
          </Col>
          <Col xs={2}>
            <div style={{ background: '#eee' }}>
              around=xs
            </div>
          </Col>
          <Col xs={2}>
            <div style={{ background: '#eee' }}>
              around=xs
            </div>
          </Col>
        </Row>
      </Spacer>
      <Spacer mtLg={2}>
        <Row between="xs">
          <Col xs={2}>
            <div style={{ background: '#eee' }}>
              between=xs
            </div>
          </Col>
          <Col xs={2}>
            <div style={{ background: '#eee' }}>
              between=xs
            </div>
          </Col>
          <Col xs={2}>
            <div style={{ background: '#eee' }}>
              between=xs
            </div>
          </Col>
        </Row>
      </Spacer>
    </Grid>
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

storiesOf('UI/Loading/Reading', module)
  .addDecorator(checkA11y)
  .add('with placeholder', withNotes('Abstraction for: https://github.com/danilowoz/react-content-loader')(() => (
    <div style={{ maxWidth: '600px', margin: '100px' }}>
      <ContentLoading height={350}>
        <rect x="0" y="15" rx="4" ry="4" width="343.98" height="20" />
        <rect x="0" y="55" rx="3" ry="3" width="100" height="22" />
        <rect x="110" y="55" rx="3" ry="3" width="130" height="24" />
        <rect x="0" y="105" rx="3" ry="3" width="390" height="10" />
        <rect x="0" y="135" rx="3" ry="3" width="520" height="10" />
        <rect x="0" y="165" rx="3" ry="3" width="340" height="10" />
      </ContentLoading>
    </div>
  )));

storiesOf('UI/Loading/Writing', module)
  .addDecorator(checkA11y)
  .add('with default color', () => <Loading />)
  .add('with white color', () => <div style={{ background: '#eee' }}><Loading white /></div>)
  .add('with primary color', () => <Loading primary />)
  .add('with success color', () => <Loading success />)
  .add('with warning color', () => <Loading warning />)
  .add('with danger color', () => <Loading danger />)
  .add('inline', () => <div><Loading inline /><Loading inline /><Loading inline /></div>)
  .add('large', () => <Loading lg />)
  .add('medium/default', () => <Loading />)
  .add('small', () => <Loading sm />)
  .add('extra small', () => <Loading xs />);

storiesOf('UI/Modals/Alert', module)
  .addDecorator(checkA11y)
  .add('with title', () => (
    <AlertModal
      title="Lorem ipsum dolor sit amet."
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    />))
  .add('with title and body', () => (
    <AlertModal
      title="Lorem ipsum dolor sit amet."
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    >
      <Text justify>
        Aliquid autem blanditiis enim maxime necessitatibus, optio provident sapiente tempore?
        Assumenda beatae consequatur ipsum magni? Dignissimos nemo numquam quasi sunt.
      </Text>
      <Text justify>Consequuntur cum eius error exercitationem nemo quis repellat saepe sunt!</Text>
    </AlertModal>))
  .add('with custom button', () => (
    <AlertModal
      title="Lorem ipsum dolor sit amet."
      confirmText="Confirm Button"
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    />))
  .add('with loading', () => (
    <AlertModal
      title="Lorem ipsum dolor sit amet."
      isLoading
      loadingComponent={<Loading primary />}
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    />))
  .add('with overlay click-to-close blocked', () => (
    <AlertModal
      title="Lorem ipsum dolor sit amet."
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
      shouldCloseOnOverlayClick={false}
    />));

storiesOf('UI/Modals/Confirm', module)
  .addDecorator(checkA11y)
  .add('with title', () => (
    <ConfirmModal
      title="Are you sure you really wanna do this?"
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    />))
  .add('with title and body', () => (
    <ConfirmModal
      title="Are you sure you really wanna do this?"
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    >
      <Text justify>
        Aliquid autem blanditiis enim maxime necessitatibus, optio provident sapiente tempore?
        Assumenda beatae consequatur ipsum magni? Dignissimos nemo numquam quasi sunt.
      </Text>
      <Text justify>Consequuntur cum eius error exercitationem nemo quis repellat saepe sunt!</Text>
    </ConfirmModal>))
  .add('with custom buttons', () => (
    <ConfirmModal
      title="Are you sure you really wanna do this?"
      confirmText="Confirm Button"
      cancelText="Cancel Button"
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    />))
  .add('with loading', () => (
    <ConfirmModal
      title="Are you sure you really wanna do this?"
      isLoading
      loadingComponent={<Loading primary />}
      onConfirm={() => action('Confirmed')}
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    />));

storiesOf('UI/Modals/Empty', module)
  .addDecorator(checkA11y)
  .add('with content', () => (
    <EmptyModal
      onClose={() => action('Cancelled')}
      modalIsOpen={true}
    >
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, vel.</Text>
    </EmptyModal>
  ));

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
