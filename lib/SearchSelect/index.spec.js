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
    it('onOpen', () => {
      const elem = mount(
        <SearchSelect
          options={[
            { name: 'vasya', title: 'Vasya' },
            { name: 'den', title: 'Den' },
            { name: 'denial', title: 'Denial' },
          ]}
        />
      );
      elem.find('input').simulate('click');
      expect(elem.find('Select').node.state.open).to.eql(false);
    });

    it('onEnterValue', () => {
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
      expect(elem.find('li')).to.have.length(1);
    });

    it('onEnterValueNotFound', () => {
      const elem = mount(
        <SearchSelect
          options={[
            { name: 'vasya', title: 'Vasya' },
            { name: 'den', title: 'Den' },
            { name: 'denial', title: 'Denial' },
          ]}
        />
      );
      const input = elem.find('input').first();
      elem.find('input').first().simulate('click');
      input.simulate('change', { target: { value: 'Diana' } });
      expect(elem.find('li')).to.have.length(1);
      expect(elem.find('li').text()).to.equal('');
    });
  });
});
