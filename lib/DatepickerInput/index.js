import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';

import libStyles from './libStyles.css';

import Input from '../Input';

export const Component = ({
  input,
  onBlur,
  maxDate,
  onChange,
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

export const ComponentInput = ({ dateFormat, ...rest }) => (
  <Input
    component={Component}
    {...rest}
    dateFormat={dateFormat}
  />
);

export default withStyles(libStyles)(ComponentInput);
