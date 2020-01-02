import React from 'react';
import Card from './card'
import '../list.css'

function Lists(props){
    return (
       
        <section className="List">
          <header className="List-header">
            <h2>{props.header}</h2>
          </header>
          <div className="List-cards">
            {props.cards.map((card) =>
                 <Card 
                 onDeleteItem = {props.onDeleteItem}
                    number={card.id}
                    key={card.id}
                    title={card.title}
                    content={card.content}
                 />
                )}
                <button onClick = {props.onRandomCard}>add random card</button>
              </div>
              </section>
       

    );
}

export default Lists;