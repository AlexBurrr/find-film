import './scss/index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Genre from './Pages/Genre'
import MovieDetails from './Pages/MovieDetails'
import Upcoming from './Pages/Upcoming'
import Top from './Pages/Top'
import Nav from './Components/nav'

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/genre'>
            <Genre />
          </Route>
          <Route path='/moviedetails'>
            <MovieDetails />
          </Route>
          <Route path='/upcoming'>
            <Upcoming />
          </Route>
          <Route path='/top'>
            <Top />
          </Route>
        </Switch>



      </div>

    </Router>

  );
}

export default App;
