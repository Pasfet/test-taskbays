import {combineReducers, applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import unionReducer from './unionReducer/unionReducer';
import sidebarReducer from './sidebarReducer/sidebarReducer';
import clubsReducer from './clubsReducer/clubsReducer';

const rootReducer = combineReducers({
    union: unionReducer,
    sidebar: sidebarReducer,
    clubs: clubsReducer
});

export type RootReducer = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
