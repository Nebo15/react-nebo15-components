import React from 'react';
import SearchSelect from 'components/Search';

import FieldInput from './FieldInput';

export default props =>
  <FieldInput component={SearchSelect} {...props} active={props.input.value} />;
