import React from 'react';
import hljs from 'highlightjs';

export default class CodeBlock extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.code);
  }

  render() {
    return (
      React.createElement('pre', null,
        React.createElement('code', {
          ref: ref => (this.code = ref),
          className: this.props.language
        }, this.props.literal)
      )
    );
  }
}
