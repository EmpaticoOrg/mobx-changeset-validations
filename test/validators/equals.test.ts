import equals from '../../src/validators/equals';
import {FailedValidation, MessageDescriptors} from '../../src/utils/types';
import messages from '../../src/utils/messages';


describe('equals', () => {
  it('accepts a value that matches a value', () => {
    const validator = equals(false);

    const result = validator('foo', false);

    expect(result).toEqual(true);
  });

  it('rejects a value that does not match a value', () => {
    const validator = equals(false);

    const result = validator('foo', true) as MessageDescriptors;

    expect(result).not.toEqual(true);
    expect(result.values.type).toEqual('equals');
    expect(result.defaultMessage).toEqual(messages.equals.defaultMessage);
  });
});
