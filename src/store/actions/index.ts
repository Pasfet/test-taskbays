import * as UnionActions from './unionActions';
import * as ClubsActions from './clubsActions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...UnionActions,
  ...ClubsActions
}