import MovieForm from './movieForm';
import Movies from './movies';
import SaveMovieButton from './saveMovieButton';


function App() {
  return (
    <div className="App">
      <h1>Min filmlista</h1>
      <h2>Lägg till en film</h2>
      <MovieForm/>
      <Movies/>
      <SaveMovieButton/>
    </div>
  );
}

export default App;
