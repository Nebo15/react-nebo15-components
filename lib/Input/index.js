import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'withStyles';
import { ErrorMessages } from 'react-nebo15-validate';

import styles from './styles.scss';

const Prefix = ({ prefix }) =>
  <span className={styles['prefix-wrapper']}>
    {prefix}
  </span>;

const Postfix = ({ postfix }) =>
  <span className={styles['postfix-wrapper']}>
    {postfix}
  </span>;

/**
 * ## Usage
 *
 * ```javascript
 * import Input from 'components/Input';
 *
 * export default class {
 *   render() {
 *     return (
 *       <Input type="text" labelText="My label" />
 *     );
 *   }
 * }
 * ```
 */
export const Component = ({
  children,
  type,
  labelText,
  postfix,
  prefix,
  disabled,
  readOnly,
  required, // eslint-disable-line
  active,
  value,
  error,
  placeholder,
  name,
  onChange,
  onBlur,
  onFocus,
  inputComponent = 'input',
  component = inputComponent,
  theme = 'gray',
  className, // eslint-disable-line
  ...rest // eslint-disable-line
}) => {
  const decorInputProps = {
    errored: !!error,
    focused: active,
    prefix,
    postfix,
  };

  const prefixComp = prefix && <Prefix {...decorInputProps} />;
  const postfixComp = postfix && <Postfix {...decorInputProps} />;

  const inputProps = {
    className: styles.input,
    type,
    disabled,
    placeholder,
    readOnly,
    value,
    name,
    onChange,
    onBlur,
    onFocus,
  };

  return (<span>
    <label className={styles['label-wrapper']}>
      { labelText && <div className={styles['label-text']}>
        { labelText }
      </div>}
      <span
        className={classnames(
          styles['group-input'],
          styles[`theme-${theme}`],
          error && styles.error,
          active && !readOnly && styles.active,
          disabled && styles.disabled
        )}
      >
        { prefixComp }
        {
          React.createElement(component, {
            ...rest,
            ...inputProps,
          })
        }
        { postfixComp }
        { error &&
          <div className={styles['error-label']}>
            { typeof error === 'string' ? error : <ErrorMessages error={error}>{children}</ErrorMessages> }
          </div>
        }
      </span>
    </label>
  </span>);
};

Component.displayName = 'Input';

Component.defaultProps = {
  theme: 'gray',
};

Component.propTypes = {
  theme: PropTypes.oneOf(['light', 'gray', 'search']),
  /**
   * Input element type attribute
   */
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,

  inputComponent: PropTypes.any,
  component: PropTypes.element,

  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

export default withStyles(styles)(Component);
