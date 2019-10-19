import React from "react";
import { Route, Redirect } from "react-router-dom";
import Reader from "../../components/Reader/Reader";
import "./App.module.css";

const App = () => (
  <>
    <Route path="/reader" component={Reader} />
    <Redirect to="/reader" />
  </>
);
export default App;
