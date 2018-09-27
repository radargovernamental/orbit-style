import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect from 'react-select';
import ReactSelectAsync from 'react-select/lib/Async';
import ReactSelectCreatable from 'react-select/lib/Creatable';
import ReactSelectAsyncCreatable from 'react-select/lib/AsyncCreatable';

import mainCss from '../../../styles/components/_atom.select.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';
import debouncePromise from '../../lib/debounce-promise';

const css = Object.assign({}, mainCss, parentCss);

const customStyles = isFormBox => ({
  multiValue: base => ({
    ...base,
    background: '#009FFF',
    color: '#fff',
    marginTop: isFormBox ? '5px' : '12px',
  }),
  multiValueLabel: base => ({
    ...base,
    background: '#009FFF',
    color: '#fff',
  }),
  singleValue: base => ({
    ...base,
    color: '#546E7A',
    minHeight: '1.1em',
  }),
  valueContainer: base => ({
    ...base,
    marginTop: isFormBox ? '18px' : '0',
    paddingBottom: isFormBox ? '8px' : '12px',
    background: 'transparent',
  }),
  input: base => ({
    ...base,
    marginTop: isFormBox ? '9px' : '10px',
  }),
  menu: base => ({
    ...base,
    marginTop: 0,
    paddingTop: 0,
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  container: (base, state) => {
    let background = 'transparent';
    let borderColor = '#ECEFF1';
    let opacity = 1;

    if (state.isFocused) {
      background = '#BEE6FF';
      borderColor = '#0f0';
    }

    if (state.isDisabled) {
      opacity = 0.3;
    }

    return {
      ...base,
      background,
      borderColor,
      opacity,
    };
  },
});

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
      async,
      asyncData,
      isFormBox,
      debounce,
      disabled,
      required,
      noOptionsMessage,
      firstMessage,
      customOptionsMessage,
      allowCustomOptions,
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

    const allProps = {
      className: css['c-form-select-custom'],
      inputId: id || name,
      isMulti: multiple,
      name,
      options,
      onChange: val => onChange({ target: { name, value: val } }),
      placeholder: null,
      ref: (ref) => { this.select = ref; },
      styles: customStyles(isFormBox),
      value,
      isDisabled: disabled,
      noOptionsMessage: ({ inputValue }) => (inputValue && inputValue.length ? noOptionsMessage() : firstMessage()),
      ...otherProps,
    };

    let elem = <ReactSelect {...allProps} />;


    if (allowCustomOptions) {
      elem = <ReactSelectCreatable {...allProps} formatCreateLabel={customOptionsMessage} />;
    }

    if (async) {
      const debouncedAsyncData = debouncePromise(asyncData, debounce);
      Object.assign(allProps, {
        loadOptions: debouncedAsyncData,
        name: null,
      });

      if (allowCustomOptions) {
        elem = <ReactSelectAsyncCreatable {...allProps} formatCreateLabel={customOptionsMessage} />;
      } else {
        elem = <ReactSelectAsync {...allProps} />;
      }
    }

    return (
      <div
        className={classes}
        onFocusCapture={() => this.setState({ isFocused: true })}
        onBlurCapture={() => this.setState({ isFocused: false })}
      >
        {elem}
        <input
          tabIndex={-1}
          value={value || ''}
          required={required}
          onChange={onChange}
          style={{
            opacity: 0,
            width: 0,
            height: 0,
            position: 'absolute',
          }}
          onFocus={() => this.select.focus()}
        />
      </div>
    );
  }
}

Select.propTypes = {
  options: PropTypes.array, //eslint-disable-line
  type: PropTypes.string,
  async: PropTypes.bool,
  asyncData: PropTypes.oneOfType([PropTypes.func, PropTypes.array]),
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
  isFormBox: PropTypes.bool,
  debounce: PropTypes.number,
  loadingMessage: PropTypes.func,
  noOptionsMessage: PropTypes.func,
  customOptionsMessage: PropTypes.func,
  firstMessage: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  allowCustomOptions: PropTypes.bool,
};
Select.defaultProps = {
  options: [],
  type: 'text',
  async: false,
  asyncData: [],
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
  multiple: false,
  value: null,
  onChange: f => f,
  id: null,
  isFormBox: true,
  debounce: 275, // "zGolden ratio" value for typing
  loadingMessage: () => 'Carregando..',
  noOptionsMessage: () => 'Não encontrado.',
  firstMessage: () => 'Digite para buscar',
  customOptionsMessage: newValue => `Criar "${newValue}"`,
  disabled: false,
  required: false,
  allowCustomOptions: false,
};

export default Select;
