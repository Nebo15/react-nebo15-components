import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hasSubmitFailed } from 'redux-form';

import Input from '../Input';

const Field = connect((state, props) => ({
  submitFailed: hasSubmitFailed(props.formName)(state),
}))(({
  component = Input, input, meta, children,
  dispatch, // eslint-disable-line
  submitFailed, ...props }) =>
  React.createElement(component, {
    ...input,
    active: meta.active,
    error: (submitFailed || (meta.dirty && !meta.active)) && meta.error,
    ...props,
  }, children));


const FieldInput = (props, { _reduxForm }) => <Field {...props} formName={_reduxForm.form} />;

FieldInput.contextTypes = {
  /*
   NOTE: bad bad way. Replace it, when redux-form will
   add submitted field to meta information prop
   */
  _reduxForm: PropTypes.object.isRequired,
};

export default FieldInput;
