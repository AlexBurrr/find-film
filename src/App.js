import './scss/index.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import Genre from './Pages/Genre'
import MovieDetails from './Pages/MovieDetails'
import Upcoming from './Pages/Upcoming'
import Top from './Pages/Top'
import New from './Pages/New'
import Nav from './Components/nav'

function App() {
  return (
    <Router>

      <div className="App">
        <Nav />
        <Switch>

          <Route path='/' component={Home} exact />
          <Route path='/genres' component={Genre} />
          <Route path='/details' component={MovieDetails} />
          <Route path='/upcoming' component={Upcoming} />
          <Route path='/top' component={Top} />
          <Route path='/new' component={New} />


        </Switch>



      </div>

    </Router>

  );
}

export default App;
