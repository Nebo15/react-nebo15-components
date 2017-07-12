import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Line from './index';

const story = createComponentStory({ component: Line });

story.addWithDoc('Default line', ({ props }) => (
  <Line {...props} />
), Line);
