import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select';

import css from '../../../styles/components/_atom.select.scss';

class Select extends React.Component {
  render() {
    const {
      options,
      multiple,
      lg,
      md,
      sm,
      xs,
      error,
      ...otherProps
    } = this.props;

    const classes = classNames({
      [css['c-form__select']]: true,
      [css['c-form__select--lg']]: lg,
      [css['c-form__select--md']]: md,
      [css['c-form__select--sm']]: sm,
      [css['c-form__select--xs']]: xs,
      [css['c-form__select--error']]: error,
    });
    return (
      <div className={classes}>
        <ReactSelect
          ref={(ref) => { this.select = ref; }}
          options={options}
          isMulti={multiple}
          {...otherProps}
        />
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array, //eslint-disable-line
  type: PropTypes.string,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
  multiple: PropTypes.bool,
};
Select.defaultProps = {
  options: [],
  type: 'text',
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
  multiple: false,
};

export default Select;
