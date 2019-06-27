import React from 'react';
import { mount } from 'enzyme';
import { assert } from 'chai';
import Card from '../../../../src/js/components/bulma/card';

describe('Bulma Card component testing', () => {
  const title = "Mocha Enzyme Test Title";
  const cardWrapper = mount(<Card title={title} />);
  it('basic card with title is rendered', () => {
    assert.equal(cardWrapper.html().indexOf(title) !== -1, true);
    done();
  });

  it('basic card does not render footer when not footer in props', () => {
    assert.equal(cardWrapper.html().indexOf("footer") === -1, true);
    done();
  });

  it('card has content section even when no child is passed', () => {
    assert.equal(cardWrapper.html().indexOf(`class="card-content"`) !== -1, true);
    done();
  });

  const cardWithFooterWrapper = mount(<Card footer="Footer" title="Title" />);
  it('card is rendered with footer when passed', () => {
    assert.equal(cardWithFooterWrapper.html().indexOf("footer") !== -1, true);
    done();
  });

  const noTitleCard = mount(<Card />);
  it('nothing renders when no title is passed', () => {
    assert.equal(noTitleCard.html() === -1, null);
    done();
  });

  const emptyTitleCard = mount(<Card title="" />);
  it('nothing renders when empty title is passed', () => {
    assert.equal(emptyTitleCard.html() === -1, null);
    done();
  });
});
