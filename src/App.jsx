import Header from './Header'
import Footer from './Footer'
import Home from './Home'
//import Movies from './Movies'
//import Latest from './Latest'
//import Favorite from './Favorite'
//import MyList from './MyList'
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Router>
        <div className='App'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/Movies' component={Movies} />
            <Route path='/Latest' component={Latest} />
            <Route path='/Favorite' component={Favorite} />
            <Route path='/Mylist' component={MyList} />
          </Switch>
        </div>
      </Router> */}
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
