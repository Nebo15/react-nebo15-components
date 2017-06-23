import { expect } from 'chai';
import { jsdom } from 'jsdom';
import register from 'ignore-styles';
import hook from 'css-modules-require-hook';
import { shallow, mount } from 'enzyme';

const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('<body><div id="app"></div></body>');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.documentRef = document;
global.expect = expect;

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: ['.sass', '.scss', '.css'],
});
