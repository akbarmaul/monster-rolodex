import React, { useState, useEffect, ChangeEvent } from 'react';
import Cardlist from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';
import './App.css';
import { getData } from './utils/data.utils';

export type Monster = {
  name: string
  id: string
  email: string
}

const App = () =>{
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [searchInput, setSearchInput] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => setMonsters(users))
  //     .catch(() => console.log('fetch failed'))
  // }, [])

  useEffect(() => {
    const fetchUsers = async() => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users')
      setMonsters(users)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster: Monster) => {
      return monster.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    setFilteredMonsters(newFilteredMonsters)
  }, [searchInput, monsters])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target
    setSearchInput(value);
  }
 
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>     
      <SearchBox onSearchChange={onSearchChange} placeholder='Search Monsters'/>
      <Cardlist monsters={filteredMonsters}/>
    </div>
  );  
}

export default App;
