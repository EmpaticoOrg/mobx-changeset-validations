import email from '../../src/validators/email';
import {FailedValidation, MessageDescriptors} from '../../src/utils/types';
import messages from '../../src/utils/messages';


describe.only('email', () => {
  it('accepts a value that matches a regex', () => {
    const validator = email();

    const result = validator('email', 'test@example.com');

    expect(result).toEqual(true);
  });

  it('rejects a value that does not match a regex', () => {
    const validator = email();

    const result = validator('email', 'test@example') as MessageDescriptors;
    
    expect(result).not.toEqual(true);
    expect(result.values.type).toEqual('format');
    expect(result.defaultMessage).toEqual(messages.email.defaultMessage);
  });
});
