import React from 'react';

import { createComponentStory } from 'stories/helpers';

import RadioInput from './index';

const story = createComponentStory({ component: RadioInput });

story.addWithDoc('Default input', ({ props }) => (
  <RadioInput {...props} />
), RadioInput);
