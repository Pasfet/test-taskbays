import { IUnion, IUnionData, UnionActions, UnionActionsType } from '../../types/store/unionTypes';
import {Dispatch} from 'redux';
import faker from 'faker';

export const setLabels = (labels: Array<any>): UnionActions => ({
  type: UnionActionsType.SET_LABEL,
  payload: labels
})

export const setPlayerData = (data: IUnionData): UnionActions => ({
  type: UnionActionsType.SET_UNION_DATA,
  payload: data
})

export const setPlayerInfo = (player: IUnion): UnionActions => ({
  type: UnionActionsType.SET_UNION_INFO,
  payload: player
})

export const clearLabels = (): UnionActions => ({
  type: UnionActionsType.CLEAR_LABELS,
})

export const clearPlayerData = (): UnionActions => ({
  type: UnionActionsType.CLEAR_UNION_DATA,
})
export const clearPlayerInfo = (): UnionActions => ({
  type: UnionActionsType.CLEAR_UNION_INFO,
})

export const getUnionInfo = (unionId: string | number, filteredList: Array<IUnion>) => {
  return (dispatch: Dispatch<UnionActions>) => {
    try {
      const response = filteredList.find(union => union.union_id === unionId);

      if (response) {
        dispatch(setPlayerInfo(response));
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export const getChartData = () => {
  return async (dispatch: Dispatch<UnionActions>) => {
    try {
      const response = await mockChartData(500);

      dispatch(setPlayerData(response));
    } catch (err) {
      console.log(err);
    }
  }
}

// MOCK FETCH CHART DATA
// /api/v1/stats/features/?game_id={game_id}&team_id={team_id}
// export const fetchChartData = (game_id: string, team_id: string) => {
//   return async (dispatch: Dispatch<UnionActions>): Promise<void> => {
//     try {
//       const response = await fetch(`https://mockurl//api/v1/stats/features/?game_id=${game_id}&team_id=${team_id}`);
//       const data = response.json();

//       if (data.ok) {
//         dispatch(...); // If response === ok
//       } else {
//         dispatch(...) // For Error
//       }
//     } catch (err) {
//       console.log(err); // make an Error handler
//     }
//   }
// }

// MOCK FETCH USERS 
// /api/v1/games/{game_id}/lineup/?team_id={team_id}

// export const fetchUsers = (game_id: string, team_id: string) => {
//   return async (dispatch: Dispatch<UnionActions>): Promise<void> => {
//     try {
//       const response = await fetch(`https://mockurl/api/v1/games/${game_id}/lineup/?team_id=${team_id}`);
//       const data = response.json();

//       if (data.ok) {
//         dispatch(...); // If response === ok
//       } else {
//         dispatch(...) // For Error
//       }
//     } catch (err) {
//       console.log(err); // make an Error handler
//     }
//   }
// }


// Simulated server response
function mockChartData (delay: number): Promise<IUnionData> {
  const mockChartLabels: Array<string> = createLabels();
  const dataChart = {
    datasets: [
      {
        label: 'Dataset 1',
        data: mockChartLabels.map(() => faker.datatype.number({ min: -10, max: 10 })),
      },
    ],
  };

  const data: IUnionData = {
    labels: mockChartLabels,
    datasets: dataChart.datasets
  }
  
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

function createLabels (): Array<string> {
  const labels: Array<string> = [];

  for (let i = 1; i <= 15; i++) {
    labels.push(`Метрика ${i}`)
  }

  return labels;
}


