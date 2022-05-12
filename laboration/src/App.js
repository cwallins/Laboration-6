import MovieForm from './movieForm';
import Movies from './movies';
import SaveMovieButton from './saveMovieButton';
import OrderByAlpha from './orderByAlpha';
import OrderByGrade from './orderByGrade';



function App() {
  return (
    <div className="App">
      <h1>Min filmlista</h1>
      <h2>Lägg till en film</h2>
      <MovieForm/>
      <Movies/>
      <SaveMovieButton/>
      <OrderByAlpha/>
      <OrderByGrade/>
    </div>
  );
}

export default App;
