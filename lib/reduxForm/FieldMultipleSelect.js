import React from 'react';
import MultipleSelect from 'components/MultipleSelect';

import FieldInput from '@components/reduxForm/FieldInput';

export default props =>
  <FieldInput component={MultipleSelect} {...props} active={props.input.value} />;
