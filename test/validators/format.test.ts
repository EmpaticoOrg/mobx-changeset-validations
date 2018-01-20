import {expect} from 'chai';

import format from '../../src/validators/format';
import {FailedValidation} from '../../src/utils/types';


describe('format', () => {
  it('accepts a value that matches a regex', () => {
    const validator = format(/[a-z]{2}/);

    const result = validator('foo', 'aa');

    expect(result).to.equal(true);
  });

  it('rejects a value that does not match a regex', () => {
    const validator = format(/[a-z]{2}/);

    const result = validator('foo', 'a') as FailedValidation;

    expect(result).not.to.equal(true);
    expect(result.type).to.equal('format');
  });
});
