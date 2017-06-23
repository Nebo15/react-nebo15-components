import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import spies from 'chai-spies';

import Select from './index';

chai.use(spies);

describe('Select', () => {
  const elem = mount(
    <Select
      active="item2"
      placeholder="Select item..."
      options={[
        { name: 'item1', title: 'Item 1' },
        { name: 'item2', title: 'Item 2' },
      ]}
    />, {
      context: {
        insertCss: () => () => { }
      }
    }
  );

  describe('props', () => {
    it('options', () => {
      expect(elem.find('li')).to.have.length(2);
    });

    it('placeholder', () => {
      expect(elem.find('span').at(0).text()).to.equal('Select item...');
    });

    it('active', () => {
      expect(elem.find('div span').at(1).text()).to.equal('Item 2');
      expect(elem.find('Select').node.state.active).to.eql({ name: 'item2', title: 'Item 2' });
      expect(elem.find('[data-select-name="item2"]')).to.have.length(1);
    });

    it('onChange', () => {
      const onChange = chai.spy(() => { });

      elem.setProps({ onChange });
      elem.find('li').first().simulate('click');
      expect(onChange).to.have.been.called.with('item1');
    });
  });
});
