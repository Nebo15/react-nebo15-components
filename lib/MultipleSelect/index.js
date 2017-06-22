import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';

import Select from '../Select';
import styles from './styles.scss';

const MultipleControl = withStyles(styles)(({
  placeholder,
  active,
  error,
  options,
  onClick = () => {},
  onRemove = () => {},
}) => (
  <div
    className={classnames(
      styles.control,
      error && styles.error,
    )}
    onClick={onClick}
  >
    {
      active.length ? (
        <ul className={styles['multiple-list']}>
          {
            options
              .filter(({ name }) => ~active.indexOf(name))
              .map(i => <li key={`${i.name}-key`}>
                {i.title}
                <span
                  className={styles.close}
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(i.name);
                  }}
                />
              </li>
            )
          }
        </ul>
      ) : <span className={styles.placeholder}>{placeholder}</span>
    }
  </div>
));

export default class MultipleSelect extends React.Component {
  static propTypes = {
    labelText: PropTypes.string,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
        name: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
        disabled: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
      })
    ).isRequired,
  };

  state = {
    active: [],
    open: false,
  };

  componentWillReceiveProps(props) {
    props.active && this.setState({
      active: props.active,
    });
  }

  render() {
    return (
      <Select
        {...this.props}
        controlComponent={MultipleControl}
        multiple
        active={this.state.active || []}
        open={this.state.open}
        onToggle={open => this.setState({ open })}
        controlProps={{
          error: this.props.error,
          setOpen: open => this.setState({ open }),
          active: this.state.active,
          onRemove: id => this.setState({
            active: [...this.state.active].filter(i => i !== id),
          }),
        }}
        onChange={name => this.props.onChange(name)}
      />
    );
  }
}
