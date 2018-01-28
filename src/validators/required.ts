import { isObservableMap, isObservableArray } from 'mobx';
import {ValidationOptions, ValidatorResult} from '../utils/types';
import messages from '../utils/messages';
import {buildMessage} from '../utils/buildMessage';

/**
 * Require a value. Empty strings, empty arrays, or "empty" primitives will fail.
 */
export default function required<V = any>(opts: ValidationOptions = {}) {
  return (key: string, value: V): ValidatorResult => {
    let present;

    if (Array.isArray(value) || isObservableArray(value)) {
      present = value.length > 0;
    } else if (typeof value === 'number') {
      present = !isNaN(value);
    } else if (isObservableMap(value)) {
      present = value.size > 0;
    } else {
      present = value !== null && value !== undefined && value.toString() !== '';
    }

    opts.message  = opts.message ? opts.message : messages.required;
    return present ? true : buildMessage({type: 'required', key, message: opts.message});
  };
}
