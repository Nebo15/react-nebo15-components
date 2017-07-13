import React from 'react';
import PropTypes from 'prop-types';

import withStyles from 'withStyles';
import styles from './styles.scss';

/**
 * ## Usage
 *
 * ```javascript
 * import LoadingBar from 'components/LoadingBar';
 *
 * export default class {
 *   render() {
 *     return (
 *       <LoadingBar speed={3000} height={20} />
 *     );
 *   }
 * }
 * ```
 */
@withStyles(styles)
export default class LoadingBar extends React.Component {
  static displayName = 'LoadingBar';

  static propTypes = {
    /**
     * Animation speed
     */
    speed: PropTypes.number,

    /**
     * Par height
     */
    height: PropTypes.number,

    /**
     * CSS classes
     */
    classes: PropTypes.shape({
      wrap: PropTypes.string,
      bar: PropTypes.string,
    }),
  };

  static defaultProps = {
    speed: 3000,
    height: 20,
    classes: {
      wrap: styles.wrap,
      bar: styles.bar,
    },
  };

  render() {
    return (
      <div className={this.props.classes.wrap}>
        <div
          className={this.props.classes.bar}
          style={{
            animationDuration: `${this.props.speed}ms`,
          }}
        />
      </div>
    );
  }
}
