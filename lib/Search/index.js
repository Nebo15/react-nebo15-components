import React from 'react';
import withStyles from 'withStyles';
import classnames from 'classnames';

import Input from 'components/Input';
import Select from 'components/Select';
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
        active={(this.state.search === '') ? {} : ''}
      />
    );
  }
}
