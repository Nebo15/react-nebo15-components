import React from 'react';
import classnames from 'classnames';
import Icon from '../Icon';
import styles from './styles.scss';

const ListItem = ({ active, disabled, title, onClick }) => (
  <li
    onClick={onClick}
    className={classnames(active && styles.active, disabled && styles.disabled)}
  >
    {title}
    {active ? <span className={styles.icon}><Icon name="check-right" /></span> : null }
  </li>
);

export default ListItem;
