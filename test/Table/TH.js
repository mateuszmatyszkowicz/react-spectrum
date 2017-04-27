import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import TH from '../../src/Table/js/TH';

describe('TH', () => {
  it('supports additional classNames', () => {
    const tree = shallow(render({className: 'myClass'}));
    expect(tree.hasClass('myClass')).toBe(true);
  });

  it('supports additional properties', () => {
    const tree = shallow(render({foo: true}));
    expect(tree.prop('foo')).toBe(true);
  });

  it('supports children', () => {
    const tree = shallow(render({children: 'Foo'}));
    expect(tree.children().node).toBe('Foo');
  });
});

const render = ({children, ...otherProps}) => (
  <TH { ...otherProps }>{ children }</TH>
);