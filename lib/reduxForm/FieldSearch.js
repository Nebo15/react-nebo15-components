import React from 'react';
import FieldInput from './FieldInput';
import Select from '../SearchSelect';

export default props => <FieldInput component={Select} {...props} active={props.input.value} />;
