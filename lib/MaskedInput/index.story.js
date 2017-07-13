import React from 'react';

import { createComponentStory } from 'stories/helpers';

import MaskedInput from './index';

const story = createComponentStory({ component: MaskedInput });

story.addWithDoc('Default', ({ props }) => (
  <MaskedInput name="test" {...props} />
), MaskedInput);
