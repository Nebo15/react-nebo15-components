import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import classnames from 'classnames';
import withStyles from 'withStyles';

import Icon, { icons } from '../Icon';

import styles from './styles.scss';

const URL_TEST_REG_EXP = /^((?:[a-z]+:)?\/\/)|mailto:/i;

/**
 * ## Usage
 *
 * ```javascript
 * import Button from 'components/Button';
 *
 * export default class {
 *   render() {
 *     return (
 *       <Button>Button text</Button>
 *     );
 *   }
 * }
 * ```
 */
const Button = (props) => {
  const {
    theme = 'fill',
    size = 'middle',
    color = 'orange',
    active = false,
    disabled = false,
    block = false,
    inheritColor = false,
    type = 'button',
    to, children, onClick, id, icon, name, ...rest,
  } = props;

  const className = classnames(
    styles.button,
    styles[`theme-${theme}`],
    styles[`color-${color}`],
    styles[`size-${size}`],
    active && styles.active,
    disabled && styles.disabled,
    block && styles.block,
    inheritColor && styles['inherit-color'],
  );

  const content = (
    <div>
      {icon && <span className={styles.icon}><Icon name={icon} /></span>}
      {children}
    </div>
  );

  if (to === undefined) {
    return (
      <button name={name} id={id} onClick={onClick} type={type} className={className} {...rest}>
        {content}
      </button>
    );
  }
  if (URL_TEST_REG_EXP.test(to)) {
    return (
      <a id={id} href={to} onClick={onClick} className={className} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link id={id} to={to} onClick={onClick} className={className} {...rest}>{content}</Link>
  );
};

Button.defaultProps = {
  theme: 'fill',
  size: 'middle',
  color: 'orange'
};

Button.propTypes = {
  /**
   * Button theme
   */
  theme: PropTypes.oneOf(['fill', 'border', 'link']),

  /**
   * Button size
   */
  size: PropTypes.oneOf(['small', 'middle']),

  /**
   * Button color
   */
  color: PropTypes.oneOf(['orange', 'blue', 'green', 'red']),

  /**
   * Element type attribute
   */
  type: PropTypes.string,

  active: PropTypes.bool,

  disabled: PropTypes.bool,

  /**
   * Set display:block
   */
  block: PropTypes.bool,

  /**
   * Using parent color for button
   * @select
   */
  inheritColor: PropTypes.bool,

  /**
   * If this props not empty - button use `a` tag with to as href
   */
  to: PropTypes.string,

  /**
   * Element id attribute
   */
  id: PropTypes.string,

  /**
   * Icon name, use Icon component
   */
  icon: PropTypes.oneOf(icons),

  /**
   * Click callback
   */
  onClick: PropTypes.func,

  children: PropTypes.element,
};

Button.displayName = 'Button';

export default withStyles(styles)(Button);

export const ButtonsGroup = withStyles(styles)(
  ({ children, ...props }) => (<div {...props} className={styles.buttonsGroup}>
    {
      React.Children.toArray(children).map((i, key) =>
        <div className={styles.buttonsGroupItem} key={key}>{i}</div>
      )
    }
  </div>)
);
