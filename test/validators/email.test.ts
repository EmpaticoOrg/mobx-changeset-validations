import email from '../../src/validators/email';
import {FailedValidation} from '../../src/utils/types';


describe('email', () => {
  it('accepts a value that matches a regex', () => {
    const validator = email();

    const result = validator('email', 'test@example.com');

    expect(result).toEqual(true);
  });

  it('rejects a value that does not match a regex', () => {
    const validator = email();

    const result = validator('email', 'test@example') as FailedValidation;

    expect(result).not.toEqual(true);
    expect(result.type).toEqual('format');
    expect(result.message).toEqual('A valid email address is required');
  });
});
