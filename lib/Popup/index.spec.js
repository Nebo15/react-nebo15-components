import React from 'react';
import chai, { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import spies from 'chai-spies';

import { Popup, Confirm, Alert } from './index';

chai.use(spies);

describe('Popup', () => {
  it('children', () => {
    const elem = shallow(<Popup><span>Content</span></Popup>);
    expect(elem.contains(<span>Content</span>)).to.equal(true);
  });

  describe('props', () => {
    const elem = mount(<Popup title="Popup title" active theme="error" />);

    it('title (exists)', () => {
      expect(elem.text()).to.contain('Popup title');
    });

    it('active', () => {
      expect(elem.prop('active')).to.eql(true);
    });

    it('theme', () => {
      expect(elem.prop('theme')).to.eql('error');
    });

    it('bgCloser (true)', () => {
      expect(elem.find('div').length).to.eql(2);
    });

    it('onClose', () => {
      const onClose = chai.spy(() => {});

      elem.setProps({ onClose });
      elem.find('div').at(1).simulate('click');
      expect(onClose).to.have.been.called.once;
    });

    it('bgCloser (false)', () => {
      elem.setProps({ bgCloser: false });
      expect(elem.find('div').length).to.eql(1);
    });
  });
});

describe('Alert', () => {
  it('children', () => {
    const elem = shallow(<Alert><span>Content</span></Alert>);
    expect(elem.contains(<span>Content</span>)).to.equal(true);
  });

  it('use popup', () => {
    const elem = mount(<Alert />);
    expect(elem.find(Popup)).to.have.length(1);
  });

  describe('props', () => {
    const elem = mount(<Alert title="Confirm" ok="Done" active theme="error" />);

    it('ok', () => {
      expect(elem.find('Button')).to.have.length(1);
    });

    it('onClose', () => {
      const onClose = chai.spy(() => {});

      elem.setProps({ onClose });
      elem.find('Button').simulate('click');

      expect(onClose).to.have.been.called.once;
    });
  });
});

describe('Confirm', () => {
  it('children', () => {
    const elem = shallow(<Confirm><span>Content</span></Confirm>);
    expect(elem.contains(<span>Content</span>)).to.equal(true);
  });

  it('use popup', () => {
    const elem = mount(<Confirm />);
    expect(elem.find(Popup)).to.have.length(1);
  });

  describe('props', () => {
    const elem = mount(<Confirm title="Confirm" confirm="Done" cancel="Cancel" active theme="error" />);

    it('confirm, cancel', () => {
      expect(elem.find('Button')).to.have.length(2);
    });

    it('onCancel', () => {
      const onCancel = chai.spy(() => {});

      elem.setProps({ onCancel });
      elem.find('Button').first().simulate('click');

      expect(onCancel).to.have.been.called.once;
    });

    it('onConfirm', () => {
      const onConfirm = chai.spy(() => {});

      elem.setProps({ onConfirm });
      elem.find('Button').last().simulate('click');

      expect(onConfirm).to.have.been.called.once;
    });
  });
});
