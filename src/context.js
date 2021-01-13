import React, { createContext, useContext, useState} from 'react'

export const MyPokemonContex = createContext()

const MyPokemonContexProvider = (props) => {
  const [myPokemonList, setMyPokemonList] = useState([
    {
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      name: "charmander",
      nickName: "Naga Kecil",
      type:["fire"]
    },
    {
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      name: "charizard",
      nickName: "Naga Besar",
      type:["fire", "flying"]
    }
  ])

  return (
    <MyPokemonContex.Provider value={{
      myPokemonList,
      setMyPokemonList
    }}>
      {props.children}
    </MyPokemonContex.Provider>
  );
};


export const useMyPokemonList = () => {
  const {myPokemonList} = useContext(MyPokemonContex)

  return myPokemonList
}

export const useAddMyPokemonList = () => {
  const {setMyPokemonList} = useContext(MyPokemonContex)

  return (pokemon) => {
    setMyPokemonList((prev) => [...prev, pokemon]);
  };
}

export default MyPokemonContexProvider
