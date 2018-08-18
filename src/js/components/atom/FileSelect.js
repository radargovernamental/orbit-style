import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import mainCss from '../../../styles/components/_atom.file-select.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);

class FileSelect extends Component {
  render() {
    const {
      lg,
      md,
      sm,
      xs,
      error,
      name,
      onChange,
      ...otherProps
    } = this.props;

    const classes = classNames({
      [css['c-form__element']]: true,
      [css['c-form__file-select']]: true,
      [css['c-form__file-select--lg']]: lg,
      [css['c-form__file-select--md']]: md,
      [css['c-form__file-select--sm']]: sm,
      [css['c-form__file-select--xs']]: xs,
      [css['c-form__file-select--error']]: error,
      [css['c-form__file-select--value']]: this.ref && this.ref.value,
    });
    return (
      <span
        style={{ position: 'relative' }}
        className={css['c-form__element--value']}
      >
        <input
          type="file"
          name={name}
          id={name}
          className={classes}
          onChange={onChange}
          ref={(ref) => { this.ref = ref; }}
          {...otherProps}
        />
        {this.ref && this.ref.value ? (
          <button
            type="button"
            onClick={() => {
              onChange({ target: { files: '' } });
              this.ref.type = '';
              this.ref.type = 'file';
            }}
            className={css['c-form__file-select__remove']}
          >
            Remover
          </button>
        ) : null}
      </span>
    );
  }
}

FileSelect.propTypes = {
  name: PropTypes.string.isRequired,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
  onChange: PropTypes.func,
};
FileSelect.defaultProps = {
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
  onChange: f => f,
};

export default FileSelect;
