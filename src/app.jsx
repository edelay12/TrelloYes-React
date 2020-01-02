import React, { Component } from 'react';
import Header from './components/header.jsx';
import List from './components/list'
import './app.css'
import STORE from './components/store'
class App extends Component {
 constructor (props){
  super(props);
  this.state = {
    lists: STORE.lists,
    allCards: STORE.allCards,
  }
};

  

handleDeleteClick = (e) => {
  console.log(e.currentTarget.value)

const newObj = omit(STORE.allCards, e.currentTarget.value);

  function omit(obj, keyToOmit) {
    console.log(obj)
    console.log(keyToOmit)
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  
}
console.log(newObj)
this.setState({allCards: newObj})

}

handleRandomClick = (e) =>{
console.log('random click')

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
};

}

  render() {
    const {store} = this.props
    return (
    <main className='App'>
      <Header />
      <div className="App-list">
        {this.state.lists.map(list => (
                  <List
                  onDeleteItem = {this.handleDeleteClick}
                  onRandomCard = {this.handleRandomClick}
                  key={list.id}
                  header={list.header}
                  cards={list.cardIds.map(id => this.state.allCards[id]
                  )}
                  
                  />
        )
          )}

        </div>

  
      
    </main>
  );
}
}
export default App;