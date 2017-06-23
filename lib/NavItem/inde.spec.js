import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import NavItem from './';

describe('NavItem', () => {
  let props;
  let context;
  beforeEach(() => {
    context = {
      router: {
        isActive: (to, onlyActiveOnIndex) => to === onlyActiveOnIndex
      }
    };
    props = {
      onlyActiveOnIndex: 'test', to: 'test', activeClassName: 'test-class'
    };
  });
  it('props', () => {
    const elem = mount(<NavItem {...props}><div id="child">child</div></NavItem>, { context });
    expect(elem.prop('onlyActiveOnIndex')).to.eql(props.onlyActiveOnIndex);
    expect(elem.prop('to')).to.eql(props.to);
    expect(elem.prop('activeClassName')).to.eql(props.activeClassName);
    expect(elem.find('#child').length).to.eql(1);
  });
  it('classname', () => {
    const elem = mount(<NavItem {...props}><div id="child">child</div></NavItem>, { context });
    const elemNext = mount(<NavItem {...props} to="nexttest"><div id="child">child</div></NavItem>, { context });
    expect(elem.find(`.${props.activeClassName}`).length).to.eql(1);
    expect(elemNext.find(`.${props.activeClassName}`).length).to.eql(0);
  });
});
