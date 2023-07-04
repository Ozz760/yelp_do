import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Route exact path="/"></Route>
      </Router>
    </div>
  );
};

export default App;
