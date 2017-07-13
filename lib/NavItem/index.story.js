import React from 'react';
import { Router, createMemoryHistory } from 'react-router';

import { createComponentStory } from 'stories/helpers';

import NavItem from './index';

const history = createMemoryHistory();

const story = createComponentStory({ component: NavItem });

story.addDecorator(story => <Router history={history}>{story()}</Router>);

story.addWithDoc('Default', ({ props }) => (
  <NavItem {...props}>My link</NavItem>
), NavItem);
