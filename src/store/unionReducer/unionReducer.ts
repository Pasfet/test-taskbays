import {IUnionState, UnionActions, UnionActionsType} from '../../types/store/unionTypes';

const initialState: IUnionState = {
  chart_labels: [],
  union_data: {
    labels: [],
    datasets: []
  },
  union_info: null,
};

const unionReducer = (state = initialState, action: UnionActions): IUnionState => {
  switch (action.type) {
    case UnionActionsType.SET_LABEL:
      return {...state, chart_labels: action.payload};
    case UnionActionsType.SET_UNION_DATA:
      return {...state, union_data: {...action.payload}};
    case UnionActionsType.SET_UNION_INFO:
      return {...state, union_info: action.payload};
    case UnionActionsType.CLEAR_LABELS:
      return {...state, chart_labels: []}
    case UnionActionsType.CLEAR_UNION_DATA:
      return {...state, union_data: {labels: [], datasets: []}};
    case UnionActionsType.CLEAR_UNION_INFO: 
      return {...state, union_info: null}
    default:
      return state;
  }
}

export default unionReducer;