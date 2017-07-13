import React from 'react';

import { createComponentStory } from 'stories/helpers';

import { Popup, Alert, Confirm } from './index';

const story = createComponentStory({ component: Popup });

story.addWithDoc('Default', ({ props }) => (
  <Popup {...props}>Popup text</Popup>
), Popup, {
  defaultProps: {
    active: true,
    title: 'Default popup'
  }
});

story.addWithDoc('Alert popup', ({ props }) => (
  <Alert {...props} />
), Alert, {
  defaultProps: {
    active: true,
    title: 'Alert popup'
  }
});

story.addWithDoc('Confirm popup', ({ props }) => (
  <Confirm {...props} />
), Confirm, {
  defaultProps: {
    active: true,
    title: 'Confirm popup'
  }
});
