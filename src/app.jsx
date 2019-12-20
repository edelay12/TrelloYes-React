import React, { Component } from 'react';
import Header from './components/header.jsx';
import List from './components/list'
import './app.css'
class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };




  render() {
    const {store} = this.props
    return (
    <main className='App'>
      <Header />
      <div class="App-list">
        {store.lists.map(list => (
                  <List
                  key={list.id}
                  header={list.header}
                  cards={list.cardIds.map(id => store.allCards[id]
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