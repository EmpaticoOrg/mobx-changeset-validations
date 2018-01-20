import propertyRequired from '../../src/validators/propertyRequired';
import {FailedValidation} from '../../src/utils/types';

describe('propertyRequired', () => {
  it('works with required values', () => {
    const value = {
      foo: 'bar'
    };

    const validator = propertyRequired('foo');

    expect(validator('key', value)).toEqual(true);
  });

  it('rejects without required values', () => {
    const value = {
      foo: ''
    };

    const validator = propertyRequired('foo');

    const result = validator('key', value) as FailedValidation;
    expect(result).not.toEqual(true);
    expect(result.type).toEqual('required'); // the error message is for the specific property, not the container object
  });
});
