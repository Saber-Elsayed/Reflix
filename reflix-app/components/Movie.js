// components/Movie.js
import React from "react";

const Movie = ({ movie, budget, setBudget, rentedMovies, setRentedMovies }) => {
  const handleRent = () => {
    if (budget >= 3) {
      setBudget(budget - 3);
      setRentedMovies([...rentedMovies, movie]);
    } else {
      alert("Insufficient funds!");
    }
  };

  const handleReturn = () => {
    setBudget(budget + 3);
    setRentedMovies(rentedMovies.filter((m) => m.id !== movie.id));
  };

  return (
    <div className="movie">
      <img src={movie.img} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.descrShort}</p>
        {rentedMovies.includes(movie) ? (
          <button onClick={handleReturn}>Return</button>
        ) : (
          <button onClick={handleRent}>Rent</button>
        )}
      </div>
    </div>
  );
};

export default Movie;
