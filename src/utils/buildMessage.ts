import {FailedValidation, MessageDescriptors} from '../utils/types';
import messages from '../utils/messages';
import {createMessageDescriptor} from '../utils/createMessageDescriptors'

export function buildMessage(failedValidation: FailedValidation): MessageDescriptors {
  let {type, key, message, context} = failedValidation;

  const descriptor: MessageDescriptors = message ? formatMessage(message, type) : messages[type]
  return {...descriptor, values: {...context, key, type}}
}

function formatMessage(message: string | MessageDescriptors, type: string) {
  if(typeof message === 'string') {
    return createMessageDescriptor(message, type)
  }

  return message;
}
