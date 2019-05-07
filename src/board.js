import React, {Component} from 'react'
import Square from './square.js'

class Board extends Component{
    constructor(props){
        super(props)
        this.state={
            // intitial state of squares, stored in array + tracks players moves
            spaces:[0,0,0,0,0,0,0,0,0],
            // state of player 1 and player 2 symbol
            player1: "X",
            player2: "O",
             // boolean to tracks whether game is active
            gameStatus: 'notStarted',
            // state of current player turn
            currentPlayer:1,

        }
    }


    // function that modifies player turn state
     playersTurn = () =>{
         let{currentPlayer}=this.state
         if(currentPlayer === 1){
             this.setState({currentPlayer:2})
         }else{
             this.setState({currentPlayer:1})
         }
         console.log(`players turn has changed to ${currentPlayer}`);
     }

    // function that logs placement of player selection (x/o)
    playersMark = () => {
        let{currentPlayer, player1, player2}=this.state
        if(currentPlayer === 1){
            return player1
        }else{
            return player2
        }
    }
    // function that alerts whether winning moves have been reached (display game over)

    moveLog = (index) => {
        let{currentPlayer, spaces}=this.state
        //modify the spaces array with a players mark based on the squares index
        this.setState(spaces.splice(index, 1, currentPlayer))
        console.log(spaces)
    }

    checkForWin = () => {
        let {refresh}=this
        let { spaces, currentPlayer, gameStatus } = this.state
    //if ( spaces.indexOf(0)&& spaces.indexOf(1)&& spaces.indexOf(2) === 1) {
        if (spaces[0]===1 && spaces[1]===1 && spaces[2]===1 ||
            spaces[3]===1 && spaces[4]===1 && spaces[5]===1 ||
            spaces[6]===1 && spaces[7]===1 && spaces[8]===1 ||
            spaces[0]===1 && spaces[3]===1 && spaces[6]===1 ||
            spaces[1]===1 && spaces[4]===1 && spaces[7]===1 ||
            spaces[2]===1 && spaces[5]===1 && spaces[8]===1 ||
            spaces[0]===1 && spaces[4]===1 && spaces[8]===1 ||
            spaces[6]===1 && spaces[4]===1 && spaces[2]===1)
            {
                alert(`Player ${currentPlayer} Wins!`)
                setTimeout(refresh, 1000)
                this.setState({gameStatus: "notStarted"} )
            } else if
            (spaces[0]===2 && spaces[1]===2 && spaces[2]===2 ||
            spaces[3]===2 && spaces[4]===2 && spaces[5]===2 ||
            spaces[6]===2 && spaces[7]===2 && spaces[8]===2 ||
            spaces[0]===2 && spaces[3]===2 && spaces[6]===2 ||
            spaces[1]===2 && spaces[4]===2 && spaces[7]===2 ||
            spaces[2]===2 && spaces[5]===2 && spaces[8]===2 ||
            spaces[0]===2 && spaces[4]===2 && spaces[8]===2 ||
            spaces[6]===2 && spaces[4]===2 && spaces[2]===2)
            {
                alert(`Player ${currentPlayer} Wins!`)
                setTimeout(refresh, 1000)
            } else {

            }

        }

    endGame = () => {
        let {spaces, checkForWin, gameStatus} = this.state
        if (this.checkForWin === true) {
        this.setState({ spaces:[0,0,0,0,0,0,0,0,0],
        player1: "X",
        player2: "O",
        gameStatus: "inProgress",
        currentPlayer:1, })
        }
    }
    refresh = ()=>{
        window.location.reload()
    }


    render(){

        const { spaces } = this.state
        const {playersMark, playersTurn, moveLog, checkForWin, endGame}= this
        // creates a 3x3 board using the Square Component (flexbox)

        let square = spaces.map((value, index) => {
             return (
                 <Square
                  index = {index}
                  value = {value}
                  key = {index}
                  playersMark={playersMark}
                  playersTurn={playersTurn}
                  moveLog={moveLog}
                  checkForWin={checkForWin}
                  endGame={endGame}
                  />
             )
         })
        return(
            <div>
                <div>
                <br/>
                <br/>
                <br/>
                <h1 id="title">2019 Tic Tac Toe Championships</h1>
                <center>
                <br/>
                </center>
                </div>
                <br/>
                <div id = 'Board'> {square} </div>
            </div>
        )
    }
}
export default Board
