import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../../../styles/components/_atom.WYSIWYG.scss';

class WYSIWYG extends Component {
  componentDidMount() {
    const { autofocus } = this.props;
    if (this.editor && autofocus) {
      this.editor.focus();
    }
  }

  render() {
    const { toolbar, value, onChange } = this.props;
    return (
      <ReactQuill
        ref={(editor) => { this.editor = editor; }}
        modules={{
          toolbar,
        }}
        defaultValue={value}
        onChange={onChange}
      />
    );
  }
}

WYSIWYG.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  toolbar: PropTypes.array,
  autofocus: PropTypes.bool,
};

WYSIWYG.defaultProps = {
  autofocus: false,
  value: '',
  onChange: f => f,
  toolbar: [
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
  ],
};

export default WYSIWYG;
