// components/MovieDetail.js
import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  // Fetch movie details based on id
  const movie = {
    id: 0,
    title: "Tarzan",
    year: 1999,
    img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",
    descrShort:
      "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
  };

  return (
    <div className="movie-detail">
      <img src={movie.img} alt={movie.title} />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Description: {movie.descrShort}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
