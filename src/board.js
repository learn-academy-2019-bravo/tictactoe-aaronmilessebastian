import React, { Component } from 'react'
import Square from './square.js'
import './App.css'

class Board extends Component {
 constructor(props) {
   super(props)
     this.state = {
       spaces: [0,0,0,0,0,0,0,0,0],
       player1: 'X',
       player2: 'O',
       gameStatus: 'notStarted',
       currentPlayer: 1
     }
 }

 playersTurn = () => {
   let { currentPlayer } = this.state
   if (currentPlayer === 1) {
       this.setState({currentPlayer:2})
     } else {
       this.setState({currentPlayer:1})
     }
 }

 playersMark = () => {
   let { currentPlayer, player1, player2 } = this.state
   if (currentPlayer === 1) {
       return player1
     } else {
       return player2
     }
 }

 moveLog = (index) => {
   let { currentPlayer, spaces } = this.state
       this.setState(spaces.splice(index, 1, currentPlayer))
 }

 checkForWin = () => {
   let { refresh } = this
   let { spaces, currentPlayer, gameStatus } = this.state

       if (spaces[0]===1 && spaces[1]===1 && spaces[2]===1 ||
           spaces[3]===1 && spaces[4]===1 && spaces[5]===1 ||
           spaces[6]===1 && spaces[7]===1 && spaces[8]===1 ||
           spaces[0]===1 && spaces[3]===1 && spaces[6]===1 ||
           spaces[1]===1 && spaces[4]===1 && spaces[7]===1 ||
           spaces[2]===1 && spaces[5]===1 && spaces[8]===1 ||
           spaces[0]===1 && spaces[4]===1 && spaces[8]===1 ||
           spaces[6]===1 && spaces[4]===1 && spaces[2]===1 ||

           spaces[0]===2 && spaces[1]===2 && spaces[2]===2 ||
           spaces[3]===2 && spaces[4]===2 && spaces[5]===2 ||
           spaces[6]===2 && spaces[7]===2 && spaces[8]===2 ||
           spaces[0]===2 && spaces[3]===2 && spaces[6]===2 ||
           spaces[1]===2 && spaces[4]===2 && spaces[7]===2 ||
           spaces[2]===2 && spaces[5]===2 && spaces[8]===2 ||
           spaces[0]===2 && spaces[4]===2 && spaces[8]===2 ||
           spaces[6]===2 && spaces[4]===2 && spaces[2]===2)

       {
         setTimeout(function() {
           alert(`Player ${currentPlayer} Wins!`)
           setTimeout(refresh, 1000)
         }, 500)
       }
 }

 refresh = () => {
   window.location.reload()
 }

 render() {
   const { spaces } = this.state
   const { playersMark, playersTurn, moveLog, checkForWin } = this
   let square = spaces.map((value, index) => {
     return (

       <Square
         index = { index }
         value = { value }
         key = { index }
         playersMark = { playersMark }
         playersTurn = { playersTurn }
         moveLog = { moveLog }
         checkForWin = { checkForWin }
       />

     )
   })

   return (
     <div>
     <br/>
     <br/>

       <h1><font color = 'black'>2019 Tic Tac Toe</font>
       <br/>Championships</h1><br/>
       <div id = 'Board'> { square } </div><br/>
       <center><button id = 'button' onClick = { this.refresh }> REMATCH </button></center>

     </div>
   )
 }
}

export default Board
