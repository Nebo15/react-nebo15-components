import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Select from './index';

const story = createComponentStory({ component: Select });

story.addWithDoc('Default select', ({ props }) => (
  <Select
    {...props}
    options={[
      { name: '1', title: 'Option 1' },
      { name: '2', title: 'Option 2' },
      { name: '3', title: 'Option 3' },
      { name: '4', title: 'Option 4' },
    ]}
  />
), Select);
