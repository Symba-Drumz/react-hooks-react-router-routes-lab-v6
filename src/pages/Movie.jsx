import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4001/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching movie:", error));
  }, [id]);

  if (!movie) {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <p>Loading...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time} minutes</p>
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </main>
    </>
  );
}

export default Movie;
