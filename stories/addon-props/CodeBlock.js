import React from 'react'
import hljs from 'highlightjs';

const h = React.createElement;

export default class CodeBlock extends React.Component {
  componentDidMount() {
    this.highlightCode();
  }

  componentDidUpdate() {
    this.highlightCode();
  }

  highlightCode() {
    hljs.highlightBlock(this.refs.code);
  }

  render() {
    return (
      h('pre', null,
        h('code', {
          ref: 'code',
          className: this.props.language
        }, this.props.literal)
      )
    );
  }
}
