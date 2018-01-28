import {FailedValidation, MessageDescriptors} from '../../src/utils/types';
import messages from '../../src/utils/messages';

import confirmation from '../../src/validators/confirmation';
import '../../src/utils/types'


describe('confirmation', () => {
  it('requires two properties to be the same', () => {
    const model = {
      bar: 'fourty two'
    };

    const validator = confirmation('bar');

    const result = validator('foo', 'fourty two', model);

    expect(result).toEqual(true);
  });

  it('rejects if two properties are not the same', () => {
    const model = {
      bar: 'fourty two'
    };

    const validator = confirmation('bar');

    const result = validator('foo', 'one hundred', model) as MessageDescriptors;

    expect(result).not.toEqual(true);
    expect(result.values.type).toEqual('confirmation');
    expect(result.defaultMessage).toEqual(messages['confirmation'].defaultMessage);
  });
});
