import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export const createComponentStory = (options) => {
  const component = options.component.ComposedComponent || options.component;
  const name = component.displayName || component.name;
  const story = storiesOf(name);
  const docs = require(`!!docgen-loader!../lib/${name}/index.js`);

  //console.log(docs, name)

  story.docs = docs.reduce((target, item) => {
    if (item.displayName) {
      target[item.displayName] = item;
    }

    return target;
  }, { });

  story.addDecorator(withKnobs);

  return story;
};

export const parseDocGenProps = (doc) => {
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