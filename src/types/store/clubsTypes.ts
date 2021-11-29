import { IUnion } from "./unionTypes";

export interface IClub {
  id: string | number;
  title: string;
  name_ru: string;
  url_image: string;
  unions: Array<IUnion>;
}

export interface IFavoriteClub {
  id: string | number;
  title: string;
  name_ru: string;
  url_image: string;
}

export interface IClubsState {
  all_clubs: Array<IClub>;
  filtered_union: Array<IUnion>,
  favorite_clubs: Array<IFavoriteClub>;
}

export enum IClubsActionsTypes {
  SET_ALL_CLUBS = 'SET_ALL_CLUBS',
  SET_FILTERED_UNION = 'SET_FILTERED_UNION',
  SET_FAVORITE_CLUBS = 'SET_FAVORITE_CLUBS',
}

interface SetAllClubs {
  type: IClubsActionsTypes.SET_ALL_CLUBS,
  payload: Array<IClub>
}

interface SetFilteredClubs {
  type: IClubsActionsTypes.SET_FILTERED_UNION,
  payload: Array<IUnion>;
}

interface SetFavoriteClubs {
  type: IClubsActionsTypes.SET_FAVORITE_CLUBS,
  payload: Array<IFavoriteClub>
}


export type IClubsActions = SetAllClubs | SetFilteredClubs | SetFavoriteClubs;