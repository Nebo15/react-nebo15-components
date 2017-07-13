import React from 'react';

import { createComponentStory } from 'stories/helpers';

import LoadingBar from './index';

const story = createComponentStory({ component: LoadingBar });

story.addWithDoc('Default', ({ props }) => (
  <LoadingBar {...props} />
), LoadingBar);
