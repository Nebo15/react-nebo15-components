import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'withStyles';

import styles from './styles.scss';

/**
 * ## Usage
 *
 * ```javascript
 * import Line from 'components/Line';
 *
 * export default class {
 *   render() {
 *     return (
 *       <Line width="50" />
 *     );
 *   }
 * }
 * ```
 */
const Line = ({ width }) => (
  <hr className={styles.line} style={{ width: `${width}px` }} />
);

Line.displayName = 'Line';

Line.propTypes = {
  width: PropTypes.string
};

export default withStyles(styles)(Line);
