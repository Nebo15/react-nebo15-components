import React from 'react';

import { createComponentStory } from 'stories/helpers';

import Table from './index';

const story = createComponentStory({ component: Table });

story.addWithDoc('Default', ({ props }) => (
  <Table
    columns={[
      { key: 1, title: 'Column 1' },
      { key: 2, title: 'Column 2' },
      { key: 3, title: 'Column 3' },
    ]}
    {...props}
  />
), Table);
