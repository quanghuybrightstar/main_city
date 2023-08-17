/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SquareScreen from "./screens/SquareScreen/SquareScreen";
import AddTicketsScreen from "./screens/AddTicketsScreen/AddTicketsScreen";
import BuildingScreen from "./screens/BuildingScreen/BuildingScreen";
import FactoryScreen from "./screens/FactoryScreen/FactoryScreen";
import NoPage from "./screens/NoPage/NoPage";
import ReactDOM from "react-dom/client";
import ExchangePuzzle from "./screens/ExchangePuzzle/ExchangePuzzle";
import MoreExchange from "./screens/MoreExchange/MoreExchange";
import WheelScreen from "./screens/WheelScreen/WheelScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import SelectionType from "./constants/Selection";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<LoginScreen />} />
              <Route path="home" element={<HomeScreen />} />
              <Route path={SelectionType.SQUARE} element={<SquareScreen />} />
              <Route path={SelectionType.WHEEL} element={<WheelScreen />} />
              <Route
                path={SelectionType.BUILDING}
                element={<BuildingScreen />}
              />
              <Route path={SelectionType.FACTORY} element={<FactoryScreen />} />
              <Route
                path={`${SelectionType.WHEEL}/add_ticket`}
                element={<AddTicketsScreen />}
              />
              <Route
                path={`${SelectionType.FACTORY}/exchange_puzzle`}
                element={<ExchangePuzzle />}
              />
              <Route
                path={`${SelectionType.FACTORY}/more_exchange`}
                element={<MoreExchange />}
              />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
