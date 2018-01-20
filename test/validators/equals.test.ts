import equals from '../../src/validators/equals';
import {FailedValidation} from '../../src/utils/types';


describe('equals', () => {
  it('accepts a value that matches a value', () => {
    const validator = equals(false);

    const result = validator('foo', false);

    expect(result).toEqual(true);
  });

  it('rejects a value that does not match a value', () => {
    const validator = equals(false);

    const result = validator('foo', true) as FailedValidation;

    expect(result).not.toEqual(true);
    expect(result.type).toEqual('equals');
  });
});
