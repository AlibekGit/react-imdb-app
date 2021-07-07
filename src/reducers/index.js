import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reposReducer from './reposReducer';

const rootReducer = combineReducers({
  repos: reposReducer,
});

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
