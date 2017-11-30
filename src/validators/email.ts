import format from './format';
import {ValidationOptions, ValidatorResult} from '../utils/types';

/**
 * Validate an email per http://www.regular-expressions.info/email.html
 */
export default function email(opts: ValidationOptions = {}) {
  // Todo: Update copy of default emailmessage
  const defaultMessage = 'Hello There';
  opts.message  = opts.message ? opts.message : defaultMessage;
  return format(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig, opts);
}
