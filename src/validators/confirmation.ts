import {ValidationOptions, ValidatorResult} from '../utils/types';
import {buildMessage} from '../utils/buildMessage';

/**
 * Require that one property on the model is the same as the other. For password confirmation inputs, etc.
 */
export default function confirmation<V = any>(on: string, opts: ValidationOptions = {}) {
  return (key: string, value: V, model: any): ValidatorResult => {
    return value === model[on] ? true : buildMessage({type: 'confirmation', key, context: {on}, message: opts.message});
  };
}
