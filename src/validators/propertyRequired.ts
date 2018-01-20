import required from './required';
import {ValidationOptions, ValidatorResult} from '../utils/types';

/**
 * Require that a property of an object passes the `require` validator.
 */
export default function propertyRequired<V extends object>(prop: string, opts: ValidationOptions = {}) {
  // add correct type to value V
  return function (_key: string, value: any): ValidatorResult {
    // note that the error message is for the specific property, not the container object
    return required(opts)(prop, value[prop]);
  };
}
