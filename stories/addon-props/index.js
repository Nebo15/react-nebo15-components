import React from 'react';

import addonAPI from '@storybook/addons';
import { select, boolean, text, number } from '@storybook/addon-knobs';

const parseDocGenProps = (doc) => {
  const propsKeys = Object.keys(doc.props || { });

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

const toBoolean = (target) => {
  if (target === 'false') {
    return false;
  }

  if (target === 'true') {
    return true;
  }

  return Boolean(target);
};

const prepareVal = (val) => {
  if (typeof val === 'string') {
    return val.replace(/'/g, '');
  }

  return val;
};

const knobsByType = {
  enum: ({ defaultValue = '', name, values }) => (
    select(name, values.map(val => prepareVal(val)), prepareVal(defaultValue))
  ),

  string: ({ defaultValue, name }) => (
    text(name, prepareVal(defaultValue))
  ),

  bool: ({ defaultValue, name }) => (
    boolean(name, toBoolean(defaultValue))
  ),

  number: ({ defaultValue, name }) => (
    number(name, defaultValue)
  ),
};

export class ShowDocumentation extends React.Component {
  render() {
    const { children, doc } = this.props;
    const channel = addonAPI.getChannel();

    channel.emit('nebo15/doc-addon/show-doc', doc);

    return children;
  }
}

export default {
  addWithDoc(storyName, story, Component, { defaultProps = { } } = { }) {
    const component = Component.ComposedComponent || Component;
    const name = component.displayName || component.name;

    const doc = parseDocGenProps(this.docs[name] || {}) || { props: [] };

    return this.add(storyName, () => {
      const props = doc.props.reduce((target, prop) => {
        if (defaultProps[prop.name]) {
          prop = { ...prop, defaultValue: defaultProps[prop.name] }; // eslint-disable-line
        }

        if (knobsByType[prop.type] === undefined || (prop.type === 'enum' && typeof prop.values === 'string')) {
          return target;
        }

        target[prop.name] = knobsByType[prop.type](prop); // eslint-disable-line
        return target;
      }, {});

      return (
        <ShowDocumentation doc={this.docs[name]}>
          { story({ props }) }
        </ShowDocumentation>
      );
    });
  }
};
