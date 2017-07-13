import React from 'react';

import { createComponentStory } from 'stories/helpers';

import SelectComponent from './index';

const story = createComponentStory({ component: SelectComponent });

story.addWithDoc('Default select', ({ props }) => (
  <SelectComponent
    {...props}
    options={[
      { name: '1', title: 'Option 1' },
      { name: '2', title: 'Option 2' },
      { name: '3', title: 'Option 3' },
      { name: '4', title: 'Option 4' },
    ]}
  />
), SelectComponent);
