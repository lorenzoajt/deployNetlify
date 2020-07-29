import React from 'react';
import Board from './components/Board'
import Card from './components/card'

function App() {
  return (
    <div className="App">
      <div className="flexbox">


        <Board id="board1" className="board">
          <Card id= "card1" className="card" draggable="true">
            <div>card one</div>
          </Card>
        </Board>

        <Board id="board2" className="board">
          <Card id= "card2" className="card" draggable="true">
            <div>card Two</div>
          </Card>
        </Board>



      </div>
    </div>
  );
}

export default App;
