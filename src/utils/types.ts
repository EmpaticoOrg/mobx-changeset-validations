interface Dict<T> {
  [key: string]: T;
}

interface FailedValidation {
  type: string;
  key: string;
  message: string;
  context?: Dict<string>;
}

type ValidatorResult = true | FailedValidation;

// Todo -> Add the correct type here to message
interface ValidationOptions {
  message?: any;
  context?: Dict<string>;
}
