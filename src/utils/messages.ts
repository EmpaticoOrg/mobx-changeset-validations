import {createMessageDescriptors} from './createMessageDescriptors';
import {MessageDescriptors} from './types';

export default createMessageDescriptors('Validation', {
  required: '{key} is a required field',
  format: '{key} is not formatted correctly',
  confirmation: '{key} needs to match {on}',
  email: 'A valid email address is required',
  tooShort: '{key} is too short (minimum is {min})',
  tooLong: '{key} is too long (maximum is {max})',
  wrongLength: '{key} is the wrong length (should be {is})',
  between: '{key} is the wrong length (should be between {min} and {max})',
  equals: '{key} must exactly match {desiredValue}'
});
