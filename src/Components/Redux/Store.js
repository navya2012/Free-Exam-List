import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./Reducers/Reducer";
import { compose } from "redux";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, Reducer)

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const myStore = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))

export const persistor = persistStore(myStore)



// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const myStore = createStore(Reducer,  composeEnhancer(applyMiddleware(thunk)))

