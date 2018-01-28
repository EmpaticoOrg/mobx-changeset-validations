import {Dict, Descriptors} from './types'

export function createMessageDescriptors<T extends Dict<string>>(prefix: string, messages: T): Descriptors<T> {
  let descriptors = {} as Descriptors<T>;
  Object.keys(messages).forEach((id) => {
    descriptors[id] = createMessageDescriptor(messages[id], id, prefix);
  });

  return descriptors;
}

export function createMessageDescriptor(message: string, type: string, prefix: string = 'Validation') {
  return {id: `${prefix}.${type}`, defaultMessage: message}
}
