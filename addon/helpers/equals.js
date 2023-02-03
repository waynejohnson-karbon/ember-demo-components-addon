import { helper } from '@ember/component/helper';

function equals([a, b]) {
  return a === b;
}

export default helper(equals);
