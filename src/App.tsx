import React, { FunctionComponent, useState, useEffect } from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

  
const App: FunctionComponent = () => {
    return (
        <Router>
            <div>
                {/* La barre de navigation commune à toutes les pages */}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                    
                </nav>
                {/* Le système de gestion des routes de notre application */}
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route path="/pokemons/:id" component={PokemonDetail} />
                </Switch>
            </div>
        </Router> 
 )
}
  
export default App;