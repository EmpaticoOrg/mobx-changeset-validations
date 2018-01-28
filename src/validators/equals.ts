import {ValidationOptions, ValidatorResult} from '../utils/types';
import {buildMessage} from '../utils/buildMessage';
import messages from '../utils/messages';

/**
 * Require that a value exactly match a given desired value.
 */
export default function equals(desiredValue: any, opts: ValidationOptions = {}) {
  return (key: string, value: any): ValidatorResult => {
    opts.message  = opts.message ? opts.message : messages.equals;
    return value === desiredValue ? true : buildMessage({type: 'equals', key, context: {desiredValue}, message: opts.message});
  };
}
