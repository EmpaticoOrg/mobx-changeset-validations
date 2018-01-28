import {isPlainObject} from '../utils/isPlainObject';
import {isObservableMap} from 'mobx';
import {ValidationOptions, ValidatorResult, LengthPredicates} from '../utils/types';
import messages from '../utils/messages';
import {buildMessage} from '../utils/buildMessage';

/**
 * Validate that a value is a certain length. Options are `min`, `max`, and `is` for an exact length.
 */
export default function length(lengthCheck: LengthPredicates, opts: ValidationOptions = {}) {
  return (key: string, value: any): ValidatorResult  => {
    let valueLength;
    if (typeof value.length !== 'undefined') {
      valueLength = value.length;
    } else if (isPlainObject(value)) {
      valueLength = Object.keys(value).length;
    } else if (isObservableMap(value)) {
      valueLength = value.size;
    } else {
      throw new Error(`can't calculate length of ${value.toString()}, does it have a length or size?`);
    }

    let valid;
    let validation;
    if (typeof lengthCheck.min !== 'undefined' && typeof lengthCheck.max !== 'undefined') {
      valid = valueLength <= lengthCheck.max && valueLength >= lengthCheck.min;
      validation = 'between';
    } else if (typeof lengthCheck.is !== 'undefined') {
      valid = valueLength === lengthCheck.is;
      validation = 'wrongLength';
    } else if (typeof lengthCheck.min !== 'undefined') {
      valid = valueLength >= lengthCheck.min;
      validation = 'tooShort';
    } else if (typeof lengthCheck.max !== 'undefined') {
      valid = valueLength <= lengthCheck.max;
      validation = 'tooLong';
    } else {
      throw new Error(`no length predicate given`);
    }

    opts.message  = opts.message ? opts.message : messages[validation];
    return valid ? true : buildMessage({type: validation, key, message: opts.message, context: {...lengthCheck}});
  };
}
