import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

export const createComponentStory = (options) => {
  const component = options.component.ComposedComponent || options.component;
  const name = component.displayName || component.name;
  const story = storiesOf(name);
  const docs = require(`!!docgen-loader!../lib/${name}/index.js`); // eslint-disable-line

  story.docs = docs.reduce((target, item) => {
    if (item.displayName) {
      target[item.displayName] = item; // eslint-disable-line
    }

    return target;
  }, { });

  story.addDecorator(withKnobs);

  return story;
};
