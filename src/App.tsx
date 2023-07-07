import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => {
    //Hook d'état
    const [pokemons, setPokemons] = useState<Pokemon[]>([])
    
    //Hook d'effet
    useEffect(() => {
        setPokemons((POKEMONS));
    }, []);
    return (
    <div>
        <h1>Pokédex</h1>
        <p>Il y a {pokemons.length} pokemons dans votre Pokédex.</p>
    </div>    
 )
}
  
export default App;