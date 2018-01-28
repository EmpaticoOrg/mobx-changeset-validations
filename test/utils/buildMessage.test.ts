import {buildMessage} from '../../src/utils/buildMessage';
import messages from '../../src/utils/messages';

describe('buildMessage', () => {
  test('default message', () => {
    let failedValidation = {key: 'name', type: 'required'};
    let result = buildMessage(failedValidation);

    expect(result.values).toEqual(failedValidation);
    expect(result.defaultMessage).toEqual(messages['required'].defaultMessage);
  });

  test('with message as string', () => {
    let message = 'Name is not valid';
    let failedValidation = {key: 'name', type: 'required', message };
    let result = buildMessage(failedValidation);

    expect(result.defaultMessage).toEqual(message)
    expect(result.values.type).toEqual('required')
    expect(result.values.key).toEqual('name')
  });

  test('with message as MessageDescriptor', () => {
    let message = {defaultMessage: 'Name is not valid', id: 'Validation.required'};
    let failedValidation = {key: 'name', type: 'required', message };
    let result = buildMessage(failedValidation);

    expect(result.defaultMessage).toEqual(message.defaultMessage)
    expect(result.values.type).toEqual('required')
    expect(result.values.key).toEqual('name')
  });
});
