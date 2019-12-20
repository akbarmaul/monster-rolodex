import React, { Component } from 'react';
import Cardlist from './components/cardlist/cardlist.component';
import SearchBox from './components/searchbox/searchbox.component';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchInput: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
      .catch(err => console.log('fetch failed'))
  }

  onSearchChange = event => {
    this.setState({searchInput: event.target.value});
  }

  render(){
    const {monsters, searchInput} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>     
        <SearchBox onSearchChange={this.onSearchChange}/>
        <Cardlist monsters={filteredMonsters}/>
        
        
      </div>
    );
  }
}

export default App;
