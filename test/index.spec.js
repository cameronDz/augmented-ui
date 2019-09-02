import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme'
import Card from '../src/js/components/bulma/card';


describe('initial test', () => {
  describe('card tests', () => {
    it('should render with title prop', () => {
      const wrap = mount(<Card title='test' />);
      const html = wrap.html();
      expect(html.indexOf('<div') !== -1).to.equal(true);
    });

    it('should NOT render without title prop', () => {
      const wrap = mount(<Card title='' />);
      const html = wrap.html();
      expect(!!html).to.equal(false);
    });

    it('should render a footer with footer prop', () => {
      const wrap = mount(<Card title='test' />);
      const html = wrap.html();
      expect(html.indexOf('<footer') === -1).to.equal(true);
    });

    it('should NOT render a footer without footer prop', () => {
      const wrap = mount(<Card footer='test' title='test' />);
      const html = wrap.html();
      expect(html.indexOf('<footer') !== -1).to.equal(true);
    });
  });
});
