import {expect} from 'chai';
import {FailedValidation} from '../../src/utils/types';


import confirmation from '../../src/validators/confirmation';
import '../../src/utils/types'


describe('confirmation', () => {
  it('requires two properties to be the same', () => {
    const model = {
      bar: 'fourty two'
    };

    const validator = confirmation('bar');

    const result = validator('foo', 'fourty two', model);

    expect(result).to.equal(true);
  });

  it('rejects if two properties are not the same', () => {
    const model = {
      bar: 'fourty two'
    };

    const validator = confirmation('bar');

    const result = validator('foo', 'one hundred', model) as FailedValidation;

    expect(result).not.to.equal(true);
    expect(result.type).to.equal('confirmation');
  });
});
