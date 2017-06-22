import React from 'react';
import FieldInput from '../reduxForm/FieldInput';
import Select from '../Search';

export default props => <FieldInput component={Select} {...props} active={props.input.value} />;
