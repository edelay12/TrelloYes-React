import React from 'react';
import Card from './card'
import '../list.css'

function Lists(props){
    return (
       
        <section class="List">
          <header class="List-header">
            <h2>{props.header}</h2>
          </header>
          <div class="List-cards">
            {props.cards.map((card) =>
                 <Card 
                    key={card.id}
                    title={card.title}
                    content={card.content}
                 />
                )}
              </div>
              </section>
       

    );
}

export default Lists;