import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import withStyles from 'withStyles';

import styles from './styles.scss';

const TableRowComponent = ({ columns = [], data = {}, ...rest }) => (
  <tr {...rest}>
    {columns.map(({ key, title, align, colspan, width }) => (
      <td
        data-title={title}
        width={width}
        colSpan={colspan}
        className={align && styles[align]}
        key={key}
      >
        { typeof data[key] !== 'undefined' || React.isValidElement(data[key]) ? data[key] : '' }
      </td>
    ))}
  </tr>
);

TableRowComponent.displayName = 'TableRow';

const TableHeadComponent = ({ columns = [] }) => (
  <thead>
    <tr>
      {columns.map(({ key, title, width, align }) => (
        <th className={align && styles[align]} width={width} key={key}>{title}</th>
      ))}
    </tr>
  </thead>
);

TableHeadComponent.displayName = 'TableHead';

const TablePlaceholder = withStyles(styles)(({ colSpan, placeholder }) => (
  <tr className={styles.placeholder}>
    <td colSpan={colSpan}>{placeholder}</td>
  </tr>
));

export const TableRow = withStyles(styles)(TableRowComponent);
export const TableHead = withStyles(styles)(TableHeadComponent);

const Table = ({
  columns = [],
  data = [],
  placeholder = 'No data',
  zebra = true,
  responsive = true,
  hovered = true,
  head = true,
  tbody = true,
  keyColumn,
  rowComponent, headComponent,
  children = [],
}) => {
  const Head = headComponent || TableHead;
  const Row = rowComponent || TableRow;

  const classNames = classnames(
    styles.table,
    zebra && styles.zebra,
    hovered && styles.hovered,
    responsive && styles.responsive
  );

  let rows = [];

  if (children.length !== 0) {
    rows = Children.map(children, (child, key) => React.cloneElement(child, { columns, key }));
  } else {
    rows = data.map((item, key) => React.createElement(Row, {
      columns,
      key: item[keyColumn] || key,
      data: item,
    }));
  }

  if (rows.length === 0) {
    rows = React.createElement(TablePlaceholder, { colSpan: columns.length, placeholder });
  }

  return (
    <table className={classNames}>
      {head && <Head columns={columns} />}
      {tbody ? <tbody>{rows}</tbody> : rows}
    </table>
  );
};

/* eslint-disable react/no-unused-prop-types */

const columnsType = PropTypes.arrayOf(
  PropTypes.shape({
    key: PropTypes.any.isRequired,
    title: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    align: PropTypes.oneOf(['left', 'center', 'right']),
    colspan: PropTypes.number,
  })
);

Table.displayName = 'Table';

Table.propTypes = {
  columns: columnsType,
  data: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    align: PropTypes.string,
    colspan: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  })),
  placeholder: PropTypes.string,
  zebra: PropTypes.bool,
  hovered: PropTypes.bool,
  responsive: PropTypes.bool,
  head: PropTypes.bool,
  tbody: PropTypes.bool,
  rowComponent: PropTypes.func,
  headComponent: PropTypes.func,
  children: PropTypes.element,
};

TableHeadComponent.propTypes = {
  columns: columnsType.isRequired,
};

TableRowComponent.propTypes = {
  columns: columnsType,
  data: PropTypes.objectOf(PropTypes.any),
};

export default withStyles(styles)(Table);
