import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';
import withStyles from 'withStyles';

import Icon from '../Icon';

import styles from './styles.scss';

/**
 * ## Usage
 *
 * ```javascript
 * import Pagination from 'components/Pagination';
 *
 * export default class {
 *   render() {
 *     return (
 *       <Pagination count={10} current={2} formatter={page => page} />
 *     );
 *   }
 * }
 * ```
 */
@withStyles(styles)
export default class Pagination extends React.Component {
  static displayName = 'Pagination';

  static propTypes = {
    current: PropTypes.number,
    count: PropTypes.number,
    formatter: PropTypes.func,
  };

  static defaultProps = {
    formatter: p => p,
  };

  constructor(props) {
    super(props);
    this.pages = Array.apply(null, { length: props.count }).map((item, index) => index + 1); // eslint-disable-line
  }

  render() {
    let { current = 1 } = this.props;
    const { count = 1, formatter = p => p } = this.props;

    current = Number(current);

    if (count === 1) {
      return null;
    }

    return (
      <ul className={styles.pagin}>
        <li className={classnames(current === 1 && styles['is-disabled'])}>
          <Link to={formatter(current - 1)}><Icon name="arrow-left" /></Link>
        </li>
        {
          this.pages.map(page => (
            <li className={classnames(current === page && styles['is-active'])} key={page}>
              <Link to={formatter(page)}>{page}</Link>
            </li>
          ))
        }
        <li className={classnames(current === count && styles['is-disabled'])}>
          <Link to={formatter(current + 1)}><Icon name="arrow-right" /></Link>
        </li>
      </ul>
    );
  }
}
