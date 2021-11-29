import { IClubsState, IClubsActions, IClubsActionsTypes } from "../../types/store/clubsTypes";

const initialState: IClubsState = {
  all_clubs: [],
  filtered_union: [],
  favorite_clubs: []
};

const clubsReducer = (state = initialState, action: IClubsActions): IClubsState => {
  switch (action.type) {
    case IClubsActionsTypes.SET_ALL_CLUBS:
      return {...state, all_clubs: action.payload};
    case IClubsActionsTypes.SET_FILTERED_UNION:
      return {
        ...state, 
        filtered_union: action.payload
      };
    case IClubsActionsTypes.SET_FAVORITE_CLUBS:
      return {
        ...state,
        favorite_clubs: action.payload
      }
    default:
      return state;
  }
}

export default clubsReducer;