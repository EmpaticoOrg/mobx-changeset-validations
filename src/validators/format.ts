import {ValidationOptions, ValidatorResult} from '../utils/types';
import {buildMessage} from '../utils/buildMessage';
import messages from '../utils/messages';

/**
 * Validate a value against a regular expression.
 */
export default function format(matchFormat: RegExp, opts: ValidationOptions = {}) {
  return (key: string, value: string): ValidatorResult => {
    opts.message  = opts.message ? opts.message : messages.format;
    return value.toString().match(matchFormat) ?  true : buildMessage({type: 'format', key, context: {matchFormat}, message: opts.message});
  };
}
