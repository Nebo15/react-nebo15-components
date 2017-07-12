import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Button from './index';

const story = createComponentStory({ component: Button });

story.addWithDoc('Default button', ({ props }) => (
  <Button {...props}>Default button</Button>
), Button);
