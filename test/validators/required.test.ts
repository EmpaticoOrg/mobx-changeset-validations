import {observable} from 'mobx';
import {FailedValidation} from '../../src/utils/types';

import required from '../../src/validators/required';
import '../../src/utils/types';

describe('required', () => {
  [
    'foobar',
    ['foobar'],
    '0',
    0,
    true,
    false,
    observable.map({foo: 'bar'}),
    observable(['foobar'])
  ].forEach((value) => {
    it(`accepts "${value}" as required`, () => {
      const validator = required();

      expect(validator('key', value)).toEqual(true);
    });
  });

  [
    '',
    null,
    [],
    NaN,
    observable.map({}),
    observable([])
  ].forEach((value) => {
    it(`rejects "${value}" as required`, () => {
      const validator = required();
      const result = validator('key', value) as FailedValidation;
      expect(result).not.toEqual(true);
      expect(result.type).toEqual('required');
    });
  });
});
