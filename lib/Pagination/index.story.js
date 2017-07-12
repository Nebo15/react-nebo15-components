import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Pagination from './index';

const story = createComponentStory({ component: Pagination });

story.addWithDoc('Default', ({ props }) => (
  <Pagination {...props} />
), Pagination, {
  defaultProps: {
    count: 10,
    current: 2,
  }
});
