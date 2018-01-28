import format from './format';
import {ValidationOptions, ValidatorResult} from '../utils/types';
import messages from '../utils/messages';

/**
 * Validate an email per http://www.regular-expressions.info/email.html
 */
export default function email(opts: ValidationOptions = {}) {
  // Todo: Update copy of default emailmessage
  opts.message  = opts.message ? opts.message : messages.email;
  return format(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig, opts);
}
