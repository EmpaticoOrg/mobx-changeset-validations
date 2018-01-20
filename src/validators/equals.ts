import {ValidationOptions, ValidatorResult} from '../utils/types';

/**
 * Require that a value exactly match a given desired value.
 */
export default function equals(desiredValue: any, opts: ValidationOptions = {}) {
  return (key: string, value: any): ValidatorResult => {
    return value === desiredValue ? true : {type: 'equals', key, context: {desiredValue}, message: opts.message};
  };
}
