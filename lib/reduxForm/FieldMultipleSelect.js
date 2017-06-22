import React from 'react';
import MultipleSelect from '../MultipleSelect';

import FieldInput from './FieldInput';

export default props =>
  <FieldInput component={MultipleSelect} {...props} active={props.input.value} />;
