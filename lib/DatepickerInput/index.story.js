import React from 'react';

import { createComponentStory } from 'stories/helpers';

import DatepickerInput from './index';

const story = createComponentStory({ component: DatepickerInput });

class Demo extends React.Component {
  state = {
    value: this.props.value,
  };

  componentWillReceiveProps(props) {
    if (props.value !== this.state.value) {
      this.setState({ value: props.value });
    }
  }

  render() {
    return (
      <DatepickerInput
        {...this.props}
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}

story.addWithDoc('Default datepicker input', ({ props }) => (
  <Demo {...props} />
), DatepickerInput, {
  defaultProps: {
    value: new Date()
  }
});
