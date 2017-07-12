import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Checkbox from './index';

const story = createComponentStory({ component: Checkbox });

story.addWithDoc('Default checkbox', ({ props }) => (
  <Checkbox {...props} />
), Checkbox);
