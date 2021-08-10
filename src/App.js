import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Container} from '@material-ui/core'
import './App.css'
import Header from './components/Header/Header'
import SimpleBottomNavigation from './components/MainNav'
import Movies from './pages/Movies/Movies'
import Series from './pages/Series/Series'
import Trending from './pages/Trending/Trending'
import Search from './pages/Search/Search'
import LoginForm from './components/LoginForm/Index'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/login" component={LoginForm} />
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/series" component={Series} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  )
}

export default App
