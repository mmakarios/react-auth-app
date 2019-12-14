import { FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';
import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';

import configureStore from './index';

describe('Store', () => {
  beforeAll(() => {});
  afterAll(() => {});

  it('should display results when necessary foo data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: FOO_EXAMPLE, example: 20 },
      { type: FOO_ANOTHER_EXAMPLE, fieldName: 'anotherExample', value: 10 },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      anotherExample: 10,
      example: 20,
    };

    expect(actual.foo).toEqual(expected);
  });

  it('should display results when necessary bar data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: BAR_EXAMPLE, example: 1.50 },
      { type: BAR_ANOTHER_EXAMPLE, fieldName: 'anotherExample', value: 1.50 },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      example: 1.50,
      anotherExample: 1.50,
    };

    expect(actual.bar).toEqual(expected);
  });
});
