import {observable} from 'mobx';
import {FailedValidation, MessageDescriptors} from '../../src/utils/types';

import required from '../../src/validators/required';
import '../../src/utils/types';
import messages from '../../src/utils/messages';

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
      const result = validator('key', value) as MessageDescriptors;
      expect(result).not.toEqual(true);
      expect(result.values.type).toEqual('required');
      expect(result.defaultMessage).toEqual(messages.required.defaultMessage)
    });
  });
});
