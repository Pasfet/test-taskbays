export enum UnionActionsType {
  SET_LABEL = 'SET_LABEL',
  SET_UNION_DATA = 'SET_UNION_DATA',
  SET_UNION_INFO = 'SET_UNION_INFO',
  CLEAR_LABELS = 'CLEAR_LABELS',
  CLEAR_UNION_DATA = 'CLEAR_UNION_DATA',
  CLEAR_UNION_INFO = 'CLEAR_UNION_INFO',
}

interface IChartData {
  label: string;
  data: Array<number>,
}

export interface IUnionData {
  labels: Array<string>;
  datasets: Array<IChartData>;
}

export interface IUnion {
  union_id: string | number;
  url_image: string;
  union_name: string;
  union_rating: number;
  union_team_number: number;
  union_club: string;
  union_country: string;
}

export interface IUnionState {
  chart_labels: Array<string>;
  union_data: IUnionData;
  union_info: IUnion | null;
}

interface SetLabels {
  type: UnionActionsType.SET_LABEL;
  payload: Array<string>;
}

interface SetUnionData {
  type: UnionActionsType.SET_UNION_DATA;
  payload: IUnionData;
}

interface SetUnionInfo {
  type: UnionActionsType.SET_UNION_INFO;
  payload: IUnion;
}

interface ClearLabels {
  type: UnionActionsType.CLEAR_LABELS;
}

interface ClearUnionData {
  type: UnionActionsType.CLEAR_UNION_DATA;
}

interface ClearUnionInfo {
  type: UnionActionsType.CLEAR_UNION_INFO;
}


export type UnionActions = SetLabels | SetUnionData | SetUnionInfo | ClearLabels | ClearUnionData | ClearUnionInfo;