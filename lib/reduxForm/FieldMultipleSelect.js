import React from 'react';
import MultipleSelect from '../MultipleSelect';

import FieldInput from '../reduxForm/FieldInput';

export default props =>
  <FieldInput component={MultipleSelect} {...props} active={props.input.value} />;
