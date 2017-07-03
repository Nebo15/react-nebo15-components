import React from 'react';
import chai, { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import spies from 'chai-spies';

import styles from './styles.scss';
import { Select } from './index';
import List from './List';
import ListItem from './ListItem';
import SelectControl from './SelectControl';
import SelectControlItem from './SelectControlItem';

chai.use(spies);

describe('Select', () => {
  describe('props', () => {
    it('should have all components', () => {
      const props = {
        options: [{ name: '1', title: 1 }, { name: '2', title: 1 }],
        placeholder: 'Enter email',
      };
      const elem = mount(<Select {...props} />);
      expect(elem.find(List).length).to.equal(1);
      expect(elem.find(ListItem).length).to.equal(2);
      expect(elem.find(SelectControl).length).to.equal(1);
    });

    it('should have options', () => {
      const props = {
        options: [{ name: '1', title: 1 }, { name: '2', title: 1 }],
        placeholder: 'Enter email',
      };
      const elem = mount(<Select {...props} />);
      expect(elem.find(List).prop('options')).to.deep.equal(props.options);
    });

    it('should have placeholder', () => {
      const props = { placeholder: 'Enter email' };
      const elem = shallow(<Select {...props} />);
      expect(elem.find(SelectControl).prop('placeholder')).to.equal(props.placeholder);
    });
  });
});

describe('List', () => {
  describe('props', () => {
    it('should have ListItem element', () => {
      const props = {
        options: [{ name: '1' }, { name: '2' }],
        isActiveItem: () => {},
      };

      const elem = shallow(<List {...props} />);
      expect(elem.find(ListItem).length).to.equal(props.options.length);
    });
    it('should show emptyText', () => {
      const props = {
        options: [],
        emptyText: 'Not found',
      };

      const elem = shallow(<List {...props} />);
      expect(elem.find('li').prop('children')).to.equal(props.emptyText);
    });
  });
  describe('events', () => {
    it('show have open class', () => {
      const props = {
        options: [{ name: '1' }, { name: '2' }],
        open: true,
        isActiveItem: () => {},
      };
      const elem = shallow(<List {...props} />);
      expect(elem.find(`.${styles.open}`)).to.have.length(1);
    });
    it('should close on click', () => {
      const spyCb = chai.spy(() => {
      });
      const props = {
        options: [{ name: '1', title: 1 }, { name: '2', title: 1 }],
        onClickItem: spyCb,
        open: true,
      };
      expect(spyCb).to.not.have.been.called();
      const elem = mount(<List {...props} />);
      expect(elem.find(`.${styles.open}`)).to.have.length(1);
      elem.find(ListItem).first().simulate('click');
      expect(spyCb).to.have.been.called();
    });
  });
});

describe('ListItem', () => {
  describe('props', () => {
    it('should have list item with title', () => {
      const props = {
        title: 'name 1',
      };
      const elem = shallow(<ListItem {...props} />);
      expect(elem.find('li').text()).to.equal(props.title);
    });
    it('should have an check for active element', () => {
      const props = {
        title: 'name 1',
        active: true,
      };
      const elem = shallow(<ListItem {...props} />);
      expect(elem.find('Icon')).to.be.defined;
    });
    it('should have disabled styles', () => {
      const props = {
        title: 'name 1',
        disabled: true,
      };
      const elem = shallow(<ListItem {...props} />);
      expect(elem.find(`.${styles.disabled}`)).to.have.length(1);
    });
  });
});

describe('SelectControlItem', () => {
  describe('props', () => {
    it('should have one control item with title', () => {
      const props = {
        title: 'name 1',
      };
      const elem = shallow(<SelectControlItem {...props} />);
      expect(elem.find('li').text()).to.equal(props.title);
    });
    it('should have multiple list item with title and remove btn', () => {
      const props = {
        title: 'name 1',
        multiple: true,
      };
      const elem = shallow(<SelectControlItem {...props} />);
      expect(elem.find('li').text()).to.equal(props.title);
      expect(elem.find(`.${styles.close}`)).to.have.length(1);
    });
  });
});
