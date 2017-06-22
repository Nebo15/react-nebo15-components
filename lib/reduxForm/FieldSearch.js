import React from 'react';
import FieldInput from '@components/reduxForm/FieldInput';
import Select from 'components/Search';

export default props => <FieldInput component={Select} {...props} active={props.input.value} />;
