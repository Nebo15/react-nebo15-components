import React from 'react';
import chai, { expect } from 'chai';
import { mount } from 'enzyme';
import spies from 'chai-spies';
import simulant from 'simulant';

import OuterClick from './index';

chai.use(spies);

describe('OuterClick', function () {
  this.timeout(15000);
  let onClick;
  beforeEach(() => {
    onClick = chai.spy(() => {});
  });

  it('called on outer click', () => {
    mount(<OuterClick onClick={onClick}><div>Test</div></OuterClick>, { attachTo: document.getElementById('app') });
    simulant.fire(document.body, 'click');
    expect(onClick).to.have.been.called();
  });

  it('no called on inner click', () => {
    const elem = mount(<OuterClick onClick={onClick}><div>Test</div></OuterClick>);
    elem.find('div').simulate('click');
    expect(onClick).to.not.have.been.called();
  });
});
