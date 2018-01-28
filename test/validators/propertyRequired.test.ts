import propertyRequired from '../../src/validators/propertyRequired';
import {FailedValidation, MessageDescriptors} from '../../src/utils/types';
import messages from '../../src/utils/messages';

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

    const result = validator('key', value) as MessageDescriptors;
    expect(result).not.toEqual(true);
    expect(result.values.type).toEqual('required'); // the error message is for the specific property, not the container object
    expect(result.defaultMessage).toEqual(messages.required.defaultMessage);
  });
});
