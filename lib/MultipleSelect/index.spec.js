import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import spies from 'chai-spies';

import MultipleSelect from './index';

chai.use(spies);

describe('Select', () => {
  const elem = mount(
    <MultipleSelect
      placeholder="Select item..."
      options={[
        { name: 'item1', title: 'Item 1' },
        { name: 'item2', title: 'Item 2' },
        { name: 'item3', title: 'Item 3' }
      ]}
    />, {
      context: {
        insertCss: () => () => { }
      }
    }
  );

  describe('props', () => {
    it('options', () => {
      expect(elem.find('li')).to.have.length(3);
    });
  });
  describe('multiple', () => {
    const elem = mount(
      <MultipleSelect
        placeholder="Select item..."
        options={[
          { name: 'item1', title: 'Item 1' },
          { name: 'item2', title: 'Item 2' },
          { name: 'item3', title: 'Item 3' }
        ]}
      />, {
        context: {
          insertCss: () => () => { }
        }
      }
    );
    it('one', () => {
      expect(elem.find('li')).to.have.length(3);
    });
  });
});
