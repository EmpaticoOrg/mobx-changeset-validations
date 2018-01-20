// from https://github.com/mobxjs/mobx/blob/master/src/utils/utils.ts
// @TODO: mobx PR to publicly export this
export function isPlainObject(value: any) {
  if (value === null || typeof value !== 'object')
    return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
