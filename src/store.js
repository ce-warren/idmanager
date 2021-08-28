import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

const userInfoFromStorage =
  (localStorage.getItem("userInfo") && typeof localStorage.getItem("userInfo") !== undefined)
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const authInfoFromStorage =
  (localStorage.getItem("authInfo") && typeof localStorage.getItem("authInfo") !== undefined)
  ? JSON.parse(localStorage.getItem("authInfo"))
  : null;

const intialState = {
  userLogin: { userInfo: userInfoFromStorage, authInfo: authInfoFromStorage },
};

const middlewre = [thunk];

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middlewre))
);

export default store;
