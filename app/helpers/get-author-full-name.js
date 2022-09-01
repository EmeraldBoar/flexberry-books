import { helper } from '@ember/component/helper';

export function getAuthorFullName([firstName, lastName, patronymic]/*, hash*/) {
  return `${lastName} ${firstName} ${patronymic}`;
}

export default helper(getAuthorFullName);
