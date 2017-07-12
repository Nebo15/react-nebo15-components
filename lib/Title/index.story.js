import React from 'react';

import { createComponentStory } from 'stories/helpers';

import { Title, H1, H2, H3, H4, H5, H6, SectionTitle } from './index';

const story = createComponentStory({ component: Title });

story.addWithDoc('Default title', ({ props }) => (
  <div>
    <p>
      <Title {...props}>Default title</Title>
    </p>

    <p>
      <H1>H1 Title</H1>
    </p>
    <p>
      <H2>H2 Title</H2>
    </p>
    <p>
      <H3>H3 Title</H3>
    </p>
    <p>
      <H4>H4 Title</H4>
    </p>
    <p>
      <H5>H5 Title</H5>
    </p>
    <p>
      <H6>H6 Title</H6>
    </p>

    <p>
      <SectionTitle>Section title</SectionTitle>
    </p>
  </div>
), Title);
