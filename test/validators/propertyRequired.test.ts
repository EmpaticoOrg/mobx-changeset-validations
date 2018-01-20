import {expect} from 'chai'

import propertyRequired from '../../src/validators/propertyRequired';
import {FailedValidation} from '../../src/utils/types';

describe('propertyRequired', () => {
  it('works with required values', () => {
    const value = {
      foo: 'bar'
    };

    const validator = propertyRequired('foo');

    expect(validator('key', value)).to.equal(true);
  });

  it('rejects without required values', () => {
    const value = {
      foo: ''
    };

    const validator = propertyRequired('foo');

    const result = validator('key', value) as FailedValidation;
    expect(result).not.to.equal(true);
    expect(result.type).to.equal('required'); // the error message is for the specific property, not the container object
  });
});
