import format from '../../src/validators/format';
import {FailedValidation, MessageDescriptors} from '../../src/utils/types';
import messages from '../../src/utils/messages';


describe('format', () => {
  it('accepts a value that matches a regex', () => {
    const validator = format(/[a-z]{2}/);

    const result = validator('foo', 'aa');

    expect(result).toEqual(true);
  });

  it('rejects a value that does not match a regex', () => {
    const validator = format(/[a-z]{2}/);

    const result = validator('foo', 'a') as MessageDescriptors;

    expect(result).not.toEqual(true);
    expect(result.values.type).toEqual('format');
    expect(result.defaultMessage).toEqual(messages.format.defaultMessage);
  });
});
