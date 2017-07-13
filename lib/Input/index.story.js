import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Input from './index';

const story = createComponentStory({ component: Input });

story.addWithDoc('Default input', ({ props }) => (
  <Input {...props} />
), Input);
