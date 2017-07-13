import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import propsAddon from 'stories/addon-props';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Nebo#15 Components',
  url: 'https://github.com/Nebo15/react-nebo15-components',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

setAddon(infoAddon);
setAddon(propsAddon);

const req = require.context('../lib', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);