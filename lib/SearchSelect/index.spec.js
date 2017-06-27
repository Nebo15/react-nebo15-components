import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import spies from 'chai-spies';

import SearchSelect from './index';

chai.use(spies);

describe('SearchSelect', () => {
  describe('props', () => {
    it('options', () => {
      expect(mount(
        <SearchSelect
          options={[
            { name: 'vasya', title: 'Vasya' },
            { name: 'den', title: 'Den' },
            { name: 'denial', title: 'Denial' },
          ]}
        />
      ).find('ul li')).to.have.length(3);
    });
    it('should open', () => {
      const elem = mount(
        <SearchSelect
          options={[
            { name: 'vasya', title: 'Vasya' },
            { name: 'den', title: 'Den' },
            { name: 'denial', title: 'Denial' },
          ]}
        />
      );
      elem.setState({ open: true });
      expect(elem.node.state.open).to.eql(true);
    });

    it('should filter on enter value', () => {
      const elem = mount(
        <SearchSelect
          name="search"
          options={[
            { name: 'vasya', title: 'Vasya' },
            { name: 'den', title: 'Den' },
            { name: 'denial', title: 'Denial' },
          ]}
        />
      );
      const input = elem.find('input').first();
      input.simulate('change', { target: { value: 'Diana' } });
      elem.find('li').last().simulate('click');
      elem.simulate('click');
      expect(elem.find('li')).to.have.length(1);
    });

    it('should be empty list', () => {
      const elem = mount(
        <SearchSelect
          emptyText="Not found"
          options={[
            { name: 'vasya', title: 'Vasya' },
            { name: 'den', title: 'Den' },
            { name: 'denial', title: 'Denial' },
          ]}
        />
      );
      const input = elem.find('input').first();
      elem.find('input').at(0).simulate('click');
      input.simulate('change', { target: { value: 'Diana' } });
      expect(elem.find('li')).to.have.length(1);
      expect(elem.find('li').text()).to.equal('Not found');
    });
  });
});
