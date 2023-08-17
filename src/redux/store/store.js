import { createStore, applyMiddleware, compose } from "redux";
import appReducers from "../reducers";
import authReducer from "../reducers/Auth";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import ReduxPersist from "../../config/ReduxPersist";

const persistedReducer = persistReducer(ReduxPersist.storeConfig, appReducers);
const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
