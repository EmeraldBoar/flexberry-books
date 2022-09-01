import { get } from '@ember/object'
import { helper } from '@ember/component/helper';
import ENV from 'flexberry-books/config/environment';

export function env([propertyName]/*, hash*/) {
  return get(ENV, propertyName);
}

export default helper(env);
