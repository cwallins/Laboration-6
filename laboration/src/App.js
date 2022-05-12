import MovieList from "./MovieList";
import Movies from "./Movies";
import AddMovieBtn from "./AddMovieBtn";


function App() {
  return (
    <div>
      <h1>MovieList</h1>
      <h4>Lägg till en film</h4>
      <hr></hr>
      <MovieList />
      <AddMovieBtn/>
      <hr></hr>
      <Movies/>
    </div>
  );
}

export default App;
