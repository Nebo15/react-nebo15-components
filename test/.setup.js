import { expect } from 'chai';
import { jsdom } from 'jsdom';
import register from 'ignore-styles';

register(['.sass', '.scss', '.css']);

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
