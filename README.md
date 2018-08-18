# orbit-style

> Orbit Style is Radar Governamental's Design System, made with Sass and React

[![NPM](https://img.shields.io/npm/v/orbit-style.svg)](https://www.npmjs.com/package/orbit-style) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add orbit-style
```

## Usage

1. Import global styles in your index.css (created with create-react-app):
```css
@import '~orbit-style/src/styles/settings/_global.scss';
```

2. Use components

```jsx
import React, { Component } from 'react'

import { Button } from 'orbit-style'

class Example extends Component {
  render () {
    return (
      <Button>Hello</Button>
    )
  }
}
```

3. Check components in storybook

```jsx
cd example
yarn install
yarn storybook
```

----

## Concept

We had a few premise regarding our own design system:

1. We want to use it as pure scss (to reuse in non SPAs, such as landing pages, for example)
2. We want to use it with React
3. Must be able to use with as many frameworks as we need
4. Let's use well known packages for complex stuff - we don't need to reinvent the wheel
5. Must be tree shaking ready and use CSS Modules for SPAs.
6. Must be easy to use

Considering our premise, we mixed three main concepts: Atomic Design, ITCSS and BEM. How?

### ITCSS

ITCSS is already quite known for its robustness and scalability regarding css. To adapt to our premise, here is what we did:

- Settings: stores variables, colors and sizes
- Tools: a series of mixins
- Generic: reset, shared global styles
- Elements: default body style
- Objects: grid and wrappers
- Components: all of ours components designed with Atomic Design (below)
- Themes: not used yet
- Trumps: few helpers

All of these styles are located in `/src/styles`.
This allow us to accomplish premises 1, 2, 3 and 5.

### Atomic Design

Following http://bradfrost.com/blog/post/atomic-web-design/ idea and considering we already have our "components" directory for styles, we now have create a components directory in `/src/js/components`. This directory is structured as: atom, molecule and organism, where:

- Atom: all unit styles
- Molecule: two or more atoms together, or something that might hold two atoms (an element container, for example)
- Organism: more complex elements that mixes many molecules

Atomic Design gives us a series of new approaches to work as we want with our components in a high scalable way. Also, we first created all of our components using React, allowing us to use it with CSS Modules and import in our React projects

This allow us to accomplish premises 2, 5. To approach premise 6, it would be too complex for users to know what's an atom/molecule/organism, so we export them as their own name. Therefore, instead of using `import Button from 'orbit-style/atom'`, we just use `import { Button } from 'orbit-style'`.

Also, to be sure 6 is achieved, we created all components using StoryBooks, which can be accessed in `/example` running `yarn storybook`.

### BEM

BEM was a plus in terms of premises. We chose it to make it easier to control our components hierarchy in terms of CSS Modules and to better control states.
For example: a Timeline component with alternate rows will have `.c-timeline--alternate-rows` class added. A Timeline with alternate rows AND with dates will have both `.c-timeline--alternate-rows` and `.c-timeline--with-date` classes added.

### Complex components

The only remaining premise is 4. In order to follow it, complex components such as custom dropdown, grid, etc, were choosen from well known packages. For now, we are using:

- [react-autosize-textarea](https://github.com/buildo/react-autosize-textarea) to auto resize textareas
- [react-content-loader](https://github.com/danilowoz/react-content-loader) for custom content loading such as Facebook's
- [react-flatpickr](https://github.com/coderhaoxin/react-flatpickr) for custom calendar/time picker
- [react-flexbox-grid](https://github.com/roylee0704/react-flexbox-grid) for flex grid
- [react-input-mask](https://github.com/sanniassin/react-input-mask) for input masking
- [react-modal](https://github.com/reactjs/react-modal) for custom modals
- [react-quill](https://github.com/zenoamaro/react-quill) for WYSIWYG
- [react-select](https://github.com/JedWatson/react-select) for custom selects

All credits for them, they did an awesome work :)

---

## Contributors

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/brunocramos">
          <img src="https://avatars.githubusercontent.com/u/4956907?v=4" title="brunocramos" width="80" height="80"><br />
          @brunocramos
        </a>
      </td>
    </tr>
  </tbody>
</table>


---

## License

Apache License 2.0 © [radargovernamental](https://github.com/radargovernamental/orbit-style)
