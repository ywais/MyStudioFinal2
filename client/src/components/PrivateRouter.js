import {BrowserRouter, Switch, Route} from 'react-router-dom';
import User from './User';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Scheduler from './Scheduler';

function PrivateRouter(props) {

  return (
    <BrowserRouter>
        <Switch>
          {/* <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contact' component={Contact} /> */}
          <Route exact path='/scheduler'
            render={({match, location, history}) => (
              <Scheduler /*user={props.user}*/ match={match} location={location} history={history} />
            )}
          />
          <Route exact path='/user'
            render={({match, location, history}) => (
              <User user={props.user} match={match} location={location} history={history} />
            )}
          />
          <Route exact path='/'>
            <Home user={props.user} />
          </Route>
          <Route exact path='/about'>
            <About user={props.user} />
          </Route>
          <Route exact path='/gallery'>
            <Gallery user={props.user} />
          </Route>
          <Route>
            <div>
              ERROR 404, PAGE NOT FOUND!
            </div>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default PrivateRouter;
