import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import spies from 'chai-spies';

import SearchSelect from './index';

chai.use(spies);

describe('SearchSelect', () => {
  const elem = mount(
    <SearchSelect
      placeholder="Select item..."
      emptyText="No data"
      active="den"
      options={[
        { name: 'vasya', title: 'Vasya' },
        { name: 'den', title: 'Den' },
        { name: 'denial', title: 'Denial' },
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

    it('onChange', () => {
      const onChange = chai.spy(() => { });

      elem.setProps({ onChange });
      elem.find('li').first().simulate('click');
      expect(onChange).to.have.been.called.with('vasya');
    });
  });
});
