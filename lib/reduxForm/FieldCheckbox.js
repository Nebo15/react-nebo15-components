import React from 'react';
import Checkbox from '../Checkbox';

import FieldInput from './FieldInput';

export default props => <FieldInput component={Checkbox} {...props} type="checkbox" checked={props.input.value} />;
