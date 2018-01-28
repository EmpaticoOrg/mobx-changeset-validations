export interface Dict<T> {
  [key: string]: T;
}

export interface FailedValidation {
  type: string;
  key: string;
  message?: MessageDescriptors | string;
  context?: Dict<any>; // string | RegExp | number
  values?: Dict<string>;
}

export type ValidatorResult = true | MessageDescriptors;

// Todo -> Add the correct type here to message
export interface ValidationOptions {
  message?: any;
}

export interface LengthPredicates {
  min?: number;
  max?: number;
  is?: number;
}

export interface MessageDescriptors {
  id: string;
  description?: string;
  defaultMessage: string;
  values?: {[key: string]: string | number | boolean }
}

export type Descriptors<T> = {
  [K in keyof T]: MessageDescriptors;
};

