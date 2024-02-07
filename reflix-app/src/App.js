// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Landing from "./components/Landing";
import Catalog from "./components/Catalog";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {
  const [users] = useState([
    { id: 1, name: "User 1", bgColor: "#ffcc00" },
    { id: 2, name: "User 2", bgColor: "#00ccff" },
    { id: 3, name: "User 3", bgColor: "#ff6666" },
  ]);

  const [budget, setBudget] = useState(10);
  const [rentedMovies, setRentedMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/" className="logo">
            REFLIX
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <Landing users={users} />
          </Route>
          <Route path="/catalog">
            <Catalog
              budget={budget}
              setBudget={setBudget}
              rentedMovies={rentedMovies}
              setRentedMovies={setRentedMovies}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          </Route>
          <Route path="/movies/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
