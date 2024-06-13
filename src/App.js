import './App.css';
import Row from './row'
import requests from './Requests'
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Originals" fetchurl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title="Trending Now" fetchurl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchurl={requests.fetchTopRated} />
      <Row title="Action movies" fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
