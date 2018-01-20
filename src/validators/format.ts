import {ValidationOptions, ValidatorResult} from '../utils/types';

/**
 * Validate a value against a regular expression.
 */
export default function format(matchFormat: RegExp, opts: ValidationOptions = {}) {
  return (key: string, value: string): ValidatorResult => {
    return value.toString().match(matchFormat) ?  true : {type: 'format', key, context: {matchFormat}, message: opts.message};
  };
}
