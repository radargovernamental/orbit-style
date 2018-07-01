import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select';

import mainCss from '../../../styles/components/_atom.select.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);


const input = (base, state) => {
  let background = 'transparent';
  let borderColor = '#f00';

  if (state.isFocused) {
    background = '#BEE6FF';
    borderColor = '#0f0';
  }

  return {
    ...base,
    background,
    borderColor,
  };
};

const customStyles = {
  multiValue: base => ({
    ...base,
    background: '#009FFF',
    color: '#fff',
    marginTop: '5px',
  }),
  multiValueLabel: base => ({
    ...base,
    background: '#009FFF',
    color: '#fff',
  }),
  singleValue: base => ({
    ...base,
    color: '#546E7A',
  }),
  valueContainer: base => ({
    ...base,
    marginTop: '20px',
    paddingBottom: '10px',
  }),
  input: base => ({
    ...base,
    marginTop: '9px',
  }),
  menu: base => ({
    ...base,
    marginTop: 0,
    paddingTop: 0,
  }),
  container: input,
};

class Select extends React.Component {
  state = {
    isFocused: false,
  };

  render() {
    const {
      options,
      multiple,
      lg,
      md,
      sm,
      xs,
      error,
      value,
      onChange,
      id,
      name,
      ...otherProps
    } = this.props;

    const { isFocused } = this.state;

    const hasValue = Array.isArray(value) ? value.length : !!value;
    const classes = classNames({
      [css['c-form__element']]: true,
      [css['c-form__element--value']]: hasValue || isFocused,
      [css['c-form__select--parent']]: true,
      [css['c-form__select']]: true,
      [css['c-form__select--lg']]: lg,
      [css['c-form__select--md']]: md,
      [css['c-form__select--sm']]: sm,
      [css['c-form__select--xs']]: xs,
      [css['c-form__select--error']]: error,
    });

    return (
      <div
        className={classes}
        onFocusCapture={() => this.setState({ isFocused: true })}
        onBlurCapture={() => this.setState({ isFocused: false })}
      >
        <ReactSelect
          className={css['c-form-select-custom']}
          id={id || name}
          isMulti={multiple}
          name={name}
          options={options}
          onChange={val => onChange({ target: { name, value: val } })}
          placeholder={null}
          ref={(ref) => { this.select = ref; }}
          styles={customStyles}
          value={value}
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
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
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
  value: null,
  onChange: f => f,
  id: null,
};

export default Select;
