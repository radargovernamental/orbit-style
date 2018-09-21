import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Flatpickr from 'react-flatpickr';

import mainCss from '../../../styles/components/_atom.datepicker.scss';
import parentCss from '../../../styles/components/_molecule.form__box.scss';

const css = Object.assign({}, mainCss, parentCss);

/**
 * Using https://flatpickr.js.org/
 */

class Datepicker extends Component {
  reactFlatpickr = null;

  state = {
    isFocused: false,
  };

  componentWillMount() {
    const { locale } = this.props;
    const l10n = require(`flatpickr/dist/l10n/${locale}.js`).default[locale]; //eslint-disable-line
    this.l10n = l10n;
  }

  render() {
    const {
      lg,
      md,
      sm,
      xs,
      error,
      value,
      name,
      id,
      options,
      onChange,
      withDate,
      withTime,
      required,
      ...otherProps
    } = this.props;

    const { isFocused } = this.state;

    const classes = classNames({
      [css['c-form__element--value']]: isFocused || (value && value.length),
      [css['c-form__element']]: true,
      [css['c-form__datepicker']]: true,
      [css['c-form__datepicker--lg']]: lg,
      [css['c-form__datepicker--md']]: md,
      [css['c-form__datepicker--sm']]: sm,
      [css['c-form__datepicker--xs']]: xs,
      [css['c-form__datepicker--error']]: error,
      [css['c-form__datepicker--value']]: value && value.length,
    });

    const newOptions = Object.assign(
      {},
      options,
      {
        locale: this.l10n,
        enableTime: withTime,
        noCalendar: !withDate,
      },
    );

    return (
      <Fragment>
        <Flatpickr
          className={classes}
          id={id || name}
          name={name}
          onChange={val => onChange({ target: { name, value: val } })}
          options={newOptions}
          value={value}
          ref={(reactFlatpickr) => { this.reactFlatpickr = reactFlatpickr; }}
          {...otherProps}
        />
        {!newOptions.allowInput && required ? (
          <input
            tabIndex={-1}
            value={value || ''}
            required={required}
            onChange={onChange}
            style={{
              opacity: 0,
              width: 0,
              height: 0,
              left: 0,
              bottom: 0,
              position: 'absolute',
            }}
            onFocus={() => {
              setTimeout(() => this.reactFlatpickr.flatpickr.open(), 0);
            }}
          />
        ) : null}
      </Fragment>
    );
  }
}

Datepicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  error: PropTypes.bool,
  withTime: PropTypes.bool,
  withDate: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.object,
  onChange: PropTypes.func,
  locale: PropTypes.string,
};
Datepicker.defaultProps = {
  value: '',
  id: null,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  error: false,
  withDate: true,
  withTime: false,
  required: false,
  options: {},
  onChange: f => f,
  locale: 'pt',
};

export default Datepicker;
