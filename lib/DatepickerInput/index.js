import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import DatePicker from 'react-datepicker';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import libStyles from './libStyles.css';

import Input from '../Input';

export const Component = ({
  input,
  onBlur = () => {},
  maxDate,
  onChange = () => {},
  value,
  dateModelFormat,
  placeholder,
  ...rest }) => (
    <DatePicker
      {...input}
      maxDate={maxDate}
      onChange={params => onChange(params.format(dateModelFormat))}
      onBlur={() => onBlur(value)}
      selected={value ? moment(value, dateModelFormat) : null}
      placeholderText={placeholder}
      {...rest}
    />
  );

Component.defaultProps = {
  onChange: () => {},
};

/**
 * ## Usage
 *
 * ```javascript
 * import DatepickerInput from 'components/DatepickerInput';
 *
 * export default class {
 *   render() {
 *     return (
 *       <DatepickerInput value={new Date} onChange={value => console.log(value)} />
 *     );
 *   }
 * }
 * ```
 */
export const ComponentInput = ({ dateFormat, ...rest }) => (
  <Input
    component={Component}
    {...rest}
    dateFormat={dateFormat}
  />
);

ComponentInput.displayName = 'DatepickerInput';

ComponentInput.propTypes = {
  /**
   * Input value
   */
  value: PropTypes.string,

  /**
   * Input placeholder
   */
  placeholder: PropTypes.string,

  /**
   * Input date format
   */
  dateModelFormat: PropTypes.string,

  /**
   * Max selected date
   */
  maxDate: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export default withStyles(libStyles)(ComponentInput);
