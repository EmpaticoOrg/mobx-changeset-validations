export interface Dict<T> {
  [key: string]: T;
}

export interface FailedValidation {
  type: string;
  key: string;
  message: Dict<string>;
  context?: Dict<any>; // string | RegExp | number
}

export type ValidatorResult = true | FailedValidation;

// Todo -> Add the correct type here to message
export interface ValidationOptions {
  message?: any;
}

export interface LengthPredicates {
  min?: number;
  max?: number;
  is?: number;
}
