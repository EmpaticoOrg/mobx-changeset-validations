import length from '../../src/validators/length';
import {observable} from 'mobx'
import {FailedValidation, MessageDescriptors} from '../../src/utils/types';
import messages from '../../src/utils/messages';


describe('length', () => {
  [
    {
      options: {min: 3},
      checks: ['foo', 'fooo', [1, 2, 3], {1: true, 2: true, 3: true}, observable.map({1: true, 2: true, 3: true})]
    },
    {
      options: {max: 4},
      checks: ['foo', 'fooo', [1, 2, 3, 4], {1: true, 2: true, 3: true, 4: true}, observable.map({1: true, 2: true, 3: true, 4: true})]
    },
    {
      options: {is: 4},
      checks: ['fooo', [1, 2, 3, 4], {1: true, 2: true, 3: true, 4: true}, observable.map({1: true, 2: true, 3: true, 4: true})]
    },
    {
      options: {min: 2, max: 4},
      checks: ['fo', 'foo', 'fooo', [1, 2, 3], {1: true, 2: true, 3: true}, observable.map({1: true, 2: true, 3: true})]
    }
  ].forEach(({options, checks}) => {

    (checks as any).forEach((value: any) => {
      it(`accepts "${value.toString()}" as ${Object.keys(options)}`, () => {
        const validator = length(options as any);

        expect(validator('key', value)).toEqual(true);
      });
    });

  });

  [
    {
      options: {min: 42},
      checks: ['foo', 'fooo', [1, 2, 3], {1: true, 2: true, 3: true}, observable.map({1: true, 2: true, 3: true})],
      failure: 'tooShort'
    },
    {
      options: {max: 1},
      checks: ['foo', 'fooo', [1, 2, 3, 4], {1: true, 2: true, 3: true, 4: true}, observable.map({1: true, 2: true, 3: true, 4: true})],
      failure: 'tooLong'
    },
    {
      options: {is: 42},
      checks: ['fooo', [1, 2, 3, 4], {1: true, 2: true, 3: true, 4: true}, observable.map({1: true, 2: true, 3: true, 4: true})],
      failure: 'wrongLength'
    },
    {
      options: {min: 20, max: 40},
      checks: ['foo', [1, 2, 3], {1: true, 2: true, 3: true}, observable.map({1: true, 2: true, 3: true})],
      failure: 'between'
    }
  ].forEach(({options, checks, failure}) => {

    (checks as any).forEach((value: any) => {
      it(`rejects "${value.toString()}" as ${Object.keys(options)}`, () => {
        const validator = length(options as any);

        const result = validator('key', value) as MessageDescriptors;
        expect(result).not.toEqual(true);
        expect(result.values.type).toEqual(failure);
        expect(result.defaultMessage).toEqual(messages[failure].defaultMessage)
      });
    });

  });

  it('accepts predicates of 0', () => {
    ['min', 'max', 'is'].forEach((value) => {
      const validator = length({[value]: 0});

      expect(validator('key', [])).toEqual(true);
    });
  });

  it('errors if no length predicate is given', () => {
    const validator = length({});

    expect(() => validator('key', [])).toThrowError();
  });

  it('errors if an property with no length is given', () => {
    const validator = length({min: 0});

    expect(() => validator('key', false)).toThrowError();
  });
});
