import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';

function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/pokedex" component={Pokedex}/>
        <Route path="/pokemon/:pokemonId" component={Pokemon}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;