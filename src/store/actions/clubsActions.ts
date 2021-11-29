import { IClub, IClubsActions, IClubsActionsTypes, IFavoriteClub } from "../../types/store/clubsTypes";
import { IUnion } from "../../types/store/unionTypes";
import { Dispatch } from 'redux';
import faker from 'faker';

export const setAllClubs = (clubs: Array<IClub>): IClubsActions => ({
  type: IClubsActionsTypes.SET_ALL_CLUBS,
  payload: clubs
})

export const setFilteredUnion = (unions: Array<IUnion>): IClubsActions => ({
  type: IClubsActionsTypes.SET_FILTERED_UNION,
  payload: unions
})

export const setFavoriteClubs = (clubs: Array<IFavoriteClub>): IClubsActions => ({
  type: IClubsActionsTypes.SET_FAVORITE_CLUBS,
  payload: clubs
})


export const fetchAllClubs = () => {
  return async (dispatch: Dispatch<IClubsActions>): Promise<void> => {
    try {
      const response = await mockResponseDataClubs(500);
      dispatch(setAllClubs(response));

      // mockFavorites
      const favoritesClubs: Array<IFavoriteClub> = response.map(club => ({id: club.id, name_ru: club.name_ru, title: club.title, url_image: club.url_image}));
      dispatch(setFavoriteClubs(favoritesClubs))
    } catch (err) {
      console.log(err);
    }
  }
}

export const getFilteredList = (clubId: string, all_clubs: Array<IClub>) => {
  return (dispatch: Dispatch<IClubsActions>): void => {
    try {
      if (clubId) {
        const searchClub = all_clubs.filter(club => club.id === clubId);
        dispatch(setFilteredUnion(searchClub[0]?.unions));
      }
    } catch (err) {
      console.log(err);
    }
  }
}


// Simulated server response
function mockResponseDataClubs(delay: number): Promise<Array<IClub>> {
  const mockDataClubsWithoutUnions: Array<IClub> = [
    {id: faker.datatype.uuid(), title: 'spartak', name_ru: 'Спартак Москва', url_image: 'clubs/spartak.png', unions: []},
    {id: faker.datatype.uuid(), title: 'sochi', name_ru: 'Сочи', url_image: 'clubs/sochi.png', unions: []},
    {id: faker.datatype.uuid(), title: 'FC_Krasnodar', name_ru: 'ФК Краснодар', url_image: 'clubs/FC_Krasnodar.png', unions: []}
  ];

  const mockDataClubsWithUnions: Array<IClub> = mockDataClubsWithoutUnions.map(club => ({...club, unions: createClubsUnions(club.title)}))

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDataClubsWithUnions), delay);
  });
}


function createClubsUnions (clubName: string): Array<IUnion> {
  const unions: Array<IUnion> = [];
  const countries: Array<string> = ['RU', 'EN', 'UA', 'AR', 'GR'];

  for (let i = 0; i < 16; i++) {
    unions.push(
      {
        union_id: faker.datatype.uuid(), 
        union_name: faker.name.firstName(0), 
        union_club: clubName,
        union_country: countries[Math.floor(Math.random() * (countries.length - 1) + 1)], 
        union_rating: faker.datatype.float({min: 0, max: 10}), 
        url_image: `${clubName}/${i}.png`, 
        union_team_number: faker.datatype.number({min: 0, max: 30})
      }
    )
  }

  return unions;
}