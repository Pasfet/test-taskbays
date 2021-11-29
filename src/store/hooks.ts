import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import type { RootReducer } from './index';
import Actions from './actions/index';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
}

export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector