import React from 'react';
import ReactMarkdown from 'react-markdown';

import addonAPI from '@storybook/addons';

import CodeBlock from './CodeBlock';

import './styles/markdown';
import './styles/highlight';

const baseStyle = {
  padding: '30px 15px',
  width: '100%'
};

const parseDoc = (doc) => {
  const propsKeys = Object.keys(doc.props);

  return {
    props: propsKeys.map(name => ({
      name,
      type: doc.props[name].type.name,
      values: Array.isArray(doc.props[name].type.value)
        ? doc.props[name].type.value.map(item => item.value) : doc.props[name].type.value,
      defaultValue: (doc.props[name].defaultValue || {}).value,
      description: doc.props[name].description,
      required: doc.props[name].required
    }))
  };
};

class DocumentationPanel extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      doc: []
    };

    this.onShowDocumentation = this.onShowDocumentation.bind(this);
  }

  componentDidMount() {
    const { channel, api } = this.props;

    channel.on('nebo15/doc-addon/show-doc', this.onShowDocumentation);

    this.stopListeningOnStory = api.onStory(() => {
      this.onShowDocumentation([]);
    });
  }

  componentWillUnmount() {
    this.stopListeningOnStory && this.stopListeningOnStory();

    this.unmounted = true;
    const { channel } = this.props;
    channel.removeListener('nebo15/doc-addon/show-doc', this.onShowDocumentation);
  }

  onShowDocumentation(doc) {
    this.setState({ doc });
  }

  render() {
    const { doc } = this.state;

    if (doc.length === 0) {
      return null;
    }

    const props = parseDoc(doc).props;

    return (
      <div style={baseStyle} className="markdown-body">
        <ReactMarkdown
          source={doc.description}
          renderers={{
            ...ReactMarkdown.renderers,
            CodeBlock
          }}
        />

        <h2>Properties</h2>
        <ul>
          {props.map(prop => (
            <li key={prop.name}>
              <code>{prop.name}</code>
              <i> - {prop.type}{Array.isArray(prop.values) && `[${prop.values.join(', ')}]`}</i>
              {(prop.values || '').toString() === '[object Object]' && <i> {`{${Object.keys(prop.values).join(', ')}}`}</i>}
              {prop.description && <span> - {prop.description}</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

addonAPI.register('nebo15/doc-addon', (api) => {
  addonAPI.addPanel('nebo15/doc-addon/panel', {
    title: 'Documentation',
    render: () => <DocumentationPanel channel={addonAPI.getChannel()} api={api} />,
  });
});
