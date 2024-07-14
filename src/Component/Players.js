import React, { useRef, useState } from 'react'


const Players = () => {

    const playerName=useRef()

    const[enteredPlayerName,setEnteredPlayerName]=useState(null)    
  

    const handleClick=()=>{
        setEnteredPlayerName(playerName.current.value)
        playerName.current.value=''
    }
  return (
    <section id="player">
        <h2>Welcome {enteredPlayerName ??'Unknown entity' }</h2>
        <p>
            <input type="text" ref={playerName} />
            <button onClick={handleClick}>Set Name</button>
        </p>
    </section>
  )
}

export default Players
