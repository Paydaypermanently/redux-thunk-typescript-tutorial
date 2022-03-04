import React,{useState} from 'react';
import './App.css';
import {RootReducerType} from "./reducers/Store";
import {useSelector, useDispatch} from "react-redux";
import {fetchPokemonData} from './actions/PokemonAction'

function App() {
  const pokemonReducer = useSelector((state:RootReducerType)=> state.PokemonReducer)
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");


  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>)=>{
  setPokemonName(event.target.value)
  }

  const searchButtonTapped = ()=>{
    dispatch(fetchPokemonData(pokemonName))
  }
  return (
    <div className="App">
    <h1>Redux-Thunk-typescript-tutorial</h1>
      <input value={pokemonName} onChange={handlePokemonName}/>
      <button onClick={searchButtonTapped}>포켓몬찾기</button>

      {pokemonReducer.success && <div><p>{pokemonName}</p>
        {pokemonReducer.pokemon?.abilities.map((item)=>{
          <>
          <div><p>{item.ability.name}</p></div>
           <div><p>{item.slot}</p></div>
          </>
        })}
      <img src={pokemonReducer.pokemon?.sprites.front_default}/>
      </div>}
    </div>
  );
}
export default App;
