import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'nebo15-isomorphic-style-loader/lib/withStyles';
import classnames from 'classnames';

import Input from '../Input';
import Select from '../Select';
import styles from './styles.scss';


const SearchControl = withStyles(styles)(({
  placeholder,
  value,
  onInputChange,
  setOpen = () => {},
  error,
}) => (
  <div
    className={classnames(
      styles.control,
      error && styles.error,
    )}
  >
    <Input
      theme="search"
      name="search"
      onChange={e => onInputChange(e.target.value)}
      placeholder={placeholder}
      onFocus={() => setOpen(true)}
      autoComplete="off"
      value={value}
    />
  </div>
));

export default class SearchSelect extends React.Component {

  static propTypes = {
    /**
     * SearchSelect label text
     */
    labelText: PropTypes.string,

    /**
     * SearchSelect Empty Text
     */
    emptyText: PropTypes.string,

    /**
     * SearchSelect type attribute
     */
    disabled: PropTypes.bool,

    /**
     * SearchSelect placeholder
     */
    placeholder: PropTypes.string,

    /**
     * Data to be shown in SearchSelect
     */
    options: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
        name: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
        disabled: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
      })
    ).isRequired,
  };

  static displayName = 'SearchSelect';

  state = {
    search: '',
    open: false,
  };

  render() {
    return (
      <Select
        {...this.props}
        controlComponent={SearchControl}
        open={this.state.open}
        controlProps={{
          value: this.state.search,
          onInputChange: search => this.setState({ search }),
          error: this.props.error,
          setOpen: open => this.setState({ open }),
        }}
        filter={i => new RegExp(this.state.search).test(i.title) === true}
        onChange={(name) => {
          this.props.onChange(name);
          this.setState({
            search: this.props.options.filter(item => item.name === name)[0].title,
          });
        }}
        onToggle={open => this.setState({ open })}
        active={this.state.search === '' && []}
      />
    );
  }
}
