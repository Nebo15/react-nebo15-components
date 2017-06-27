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

  describe('multiple select', () => {
    it('should have an active array', () => {
      const elem = mount(
        <MultipleSelect
          placeholder="Select item..."
          options={[
            { name: 'item1', title: 'Item 1' },
            { name: 'item2', title: 'Item 2' },
            { name: 'item3', title: 'Item 3' }
          ]}
        />);
      elem.node.setState({
        active: ['item1', 'item2'],
      });
      expect(elem.find('ul').first().children()).to.have.length(2);
    });
    it('should remove from active when handle close span', () => {
      const elem = mount(
        <MultipleSelect
          placeholder="Select item..."
          active={['item1', 'item2']}
          options={[
            { name: 'item1', title: 'Item 1' },
            { name: 'item2', title: 'Item 2' },
            { name: 'item3', title: 'Item 3' }
          ]}
        />);
      const closeFirst = elem.find('ul').first().at(0);
      closeFirst.simulate('click');
      expect(elem.find('ul').first().at(0)).to.have.length(1);
    });
  });
});
