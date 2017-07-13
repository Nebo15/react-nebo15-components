import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'withStyles';
import styles from './styles.scss';

const TITLE_TYPES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h5', 'h6', 'section'];

/**
 * ## Usage
 *
 * ```javascript
 * import { Title, H2 } from 'components/Title';
 *
 * export default class {
 *   render() {
 *     return (
 *       <div>
 *         <Title tag="h1" type="h3">Default title</Title>
 *
 *         <p>
 *           <H1>H1 Title</H1>
 *         </p>
 *       </div>
 *     );
 *   }
 * }
 * ```
 */
const TitleComponent = ({ type = 'h1', tag = 'h3', children }) => {
  if (TITLE_TYPES.indexOf(type) === -1) {
    throw new Error(`Unknown title type '${type}'`);
  }
  return React.createElement(tag, {
    className: classnames(styles[type]),
  }, children);
};

TitleComponent.displayName = 'Title';

TitleComponent.propTypes = {
  type: PropTypes.oneOf(TITLE_TYPES),
  tag: PropTypes.oneOf(TITLE_TYPES),
};

export const Title = withStyles(styles)(TitleComponent);

export const H1 = ({ children, tag = 'h1' }) => React.createElement(Title, { type: 'h1', tag }, children);
export const H2 = ({ children, tag = 'h2' }) => React.createElement(Title, { type: 'h2', tag }, children);
export const H3 = ({ children, tag = 'h3' }) => React.createElement(Title, { type: 'h3', tag }, children);
export const H4 = ({ children, tag = 'h4' }) => React.createElement(Title, { type: 'h4', tag }, children);
export const H5 = ({ children, tag = 'h5' }) => React.createElement(Title, { type: 'h5', tag }, children);
export const H6 = ({ children, tag = 'h6' }) => React.createElement(Title, { type: 'h6', tag }, children);

export const SectionTitle = ({ children }) => (
  <Title type="section" tag="h3">{children}</Title>
);
