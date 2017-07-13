import React from 'react';
import classnames from 'classnames';
import styles from './styles.scss';
import ListItem from './ListItem';

const List = ({ open, options = [], onClickItem, emptyText, isActiveItem = () => {}, domRef }) => (
  <ul ref={domRef} className={classnames(styles.list, open && styles.open)}>
    {
      options.map(item =>
        <ListItem
          title={item.title}
          disabled={item.disabled}
          onClick={() => onClickItem(item)}
          active={isActiveItem(item)}
          key={item.name}
        />
      )
    }
    {
      !options.length && <li className={styles.disabled}>{emptyText}</li>
    }
  </ul>
);

export default List;
