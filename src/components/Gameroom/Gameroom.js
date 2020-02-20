import React from 'react'

function Gameroom(props) {
  return (
    <div>
      <div>Round: <span>0</span></div>
      <div>
        <p>Your score: <span>0</span></p><p> Opponent score: <span>0</span></p>
      </div>
      <div>
        DISPLAY CHOICES DIV
      </div>
      <div>
        <button onClick={() => props.onChoice('rock')}>Rock</button>
        <button onClick={() => props.onChoice('paper')}>Paper</button>
        <button onClick={() => props.onChoice('scissors')}>Scissors</button>
      </div>

    </div>
  )
}


export default Gameroom