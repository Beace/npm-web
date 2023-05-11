import user from './user';
import packages from './package';
import scope from './scope';
import data from './data';

export default {
  ...user,
  ...packages,
  ...scope,
  ...data,
};
