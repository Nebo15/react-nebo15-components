import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';

import styles from './styles.scss';

export const Component = ({ selected = false, onChange = e => e, disabled, value, name }) => (
  <label className={styles.wrap}>
    <input
      type="radio"
      {...{
        onChange: () => !disabled && onChange(value),
        checked: selected,
        value,
        name,
        disabled,
      }}
    />
    <span className={styles.view} />
  </label>
);

Component.displayName = 'RadioInput';

Component.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onChange: PropTypes.func,
};

export default withStyles(styles)(Component);
