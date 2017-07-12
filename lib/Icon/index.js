import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';
import styles from './icons.font';

export const icons = [
  'arrow-left',
  'arrow-left-large',
  'arrow-right',
  'arrow-down',
  'check-right',
  'add',
  'doc',
  'trash',
  'nebo15',
  'plus',
];

/**
 * ## Usage
 *
 * ```javascript
 * import Icon from 'components/Icon';
 *
 * export default class {
 *   render() {
 *     return (
 *       <Icon name="my-icon" />
 *     );
 *   }
 * }
 * ```
 */
const Icon = ({ name }) => (<i className={classnames(styles.icon, styles[`icon-${name}`])} />);

Icon.displayName = 'Icon';

Icon.defaultProps = {
  name: 'arrow-left',
};

Icon.propTypes = {
  name: PropTypes.oneOf(icons).isRequired,
};

export default withStyles(styles)(Icon);
