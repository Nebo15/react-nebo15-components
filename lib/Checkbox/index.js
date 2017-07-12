import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';

import Icon from '../Icon';

import styles from './styles.scss';

/* eslint-disable jsx-a11y/label-has-for */
/**
 * ## Usage
 *
 * ```javascript
 * import Checkbox from 'components/Checkbox';
 *
 * export default class {
 *   render() {
 *     return (
 *       <Checkbox checked labelText="My label" />
 *     );
 *   }
 * }
 * ```
 */
const Checkbox = ({
  checked = false,
  onChange = e => e,
  onBlur, onFocus,
  error, name, labelText,
  disabled,
}) => (
  <label className={classnames(styles.wrap, error && styles.isError, checked && styles.checked)}>
    {
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        {...{
          onBlur,
          onFocus,
          name,
          disabled,
        }}
      />
    }
    <span className={styles.view}>
      <Icon name="check-right" />
    </span>

    <span className={styles.label}>
      {labelText}
    </span>
  </label>
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  /**
   * Is checked flag
   */
  checked: PropTypes.bool,

  /**
   * On checked change callback
   */
  onChange: PropTypes.func,

  /**
   * Checkbox input name
   */
  name: PropTypes.any,

  error: PropTypes.string,

  labelText: PropTypes.string,

  disabled: PropTypes.bool,

  /**
   * Blur event handler
   */
  onBlur: PropTypes.func,

  /**
   * Focus event handler
   */
  onFocus: PropTypes.func,
};

export const CheckboxGroup = withStyles(styles)(
  ({ children }) => <span className={styles.group}>{children}</span>
);
export default withStyles(styles)(Checkbox);
