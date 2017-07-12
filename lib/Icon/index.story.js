import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Icon from './index';

const story = createComponentStory({ component: Icon });

story.addWithDoc('Default icon', ({ props }) => (
  <Icon {...props} />
), Icon);
