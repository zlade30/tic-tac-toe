import React, { useState } from 'react'
import Board from './board'

import Message from './message'
import Refresh from './refresh'
import bg from './bg1.jpg'


const isWon = (board) => {
    // list of postion that is winning
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    // checking each of the postition seeing if the combination is there
    // if it does return the True
    // else return false
    for (let i=0; i< lines.length; i++) {
        let [a, b, c] = lines[i];
        //console.log(board[a] === board[b] && board[a] === board[c])
        if (board[a]!=="" &&board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}


const Game = () => {
    // this is for board
    // default value for all the elemnt is ""
    const [board, setBoard] = useState(Array(9).fill("")); 
    // first player is "X"
    // if the game is over put "" as player
    const [isPlayer, setIsPlayer] = useState("X");
    const [message, setMessage] = useState("Click to Start");
  


    const refresh  = () => {
        setBoard(Array(9).fill("")); 
        setMessage("Click to start");
        setIsPlayer("X");  
    }
 

    const handleInput = (pos) => {    
        if (isPlayer === "" || board[pos] !== "") {
            //is the game is over don't play
            // if the box has been clocked already then return
            return;
        }
       
        const boardCopy = [...board];
        boardCopy[pos] = isPlayer;
        setBoard(boardCopy); // updating board for current player  
        

        if (isWon(boardCopy)){
            // once game is over
            setMessage(`WINNER: ${isPlayer !== 'X' ? '-ZOOM' : 'Plexoo'}`)
            // since the game is over putting "" 
            setIsPlayer("");
            return;
        }

        if (boardCopy.indexOf("")=== -1){
            // if no more moves game is draw
            setMessage("DRAW")
            setIsPlayer("");
        } else {
            let nextPlayer = (isPlayer === "X") ? "O" : "X"
            setIsPlayer(nextPlayer); // updating player
            setMessage(`TURN: ${nextPlayer !== 'X' ? '-ZOOM' : 'Plexoo'}`)
        }
    }

    return (
        <div style={{ position: 'relative' }}>
            <h1 style={{ position: 'absolute', left: 20, top: 0, color: 'white' }}>Created by, Aguilar77$#6106</h1>
            <div style={{ position: 'absolute', right: 20, top: 0 }}>
                <h1 style={{ color: 'white' }}>ZAYSAN RAPTORS</h1>
                <h1 style={{ color: 'white' }}>TIC TAC TOE GAME</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '100vh',  width:'100%', backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%',  objectFit: 'cover' }}>
                <Message value={message} />
                <Board onClick={handleInput} value={board} /> 
                <Refresh onClick={refresh} value={'Refresh'} />
            </div>
        </div>
    )
}

export default Game