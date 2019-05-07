import React, {Component} from 'react'

class Square extends Component{
    constructor(props){
        super(props)
        this.state={
            playersMark:"",

        }
    }

// onclick button that calls the move logic in each sqaure
    onbtnClick =() => {
        let {playersMark, playersTurn, moveLog, index, checkForWin, endGame}= this.props
        moveLog(index)
        let newMark = playersMark()
        this.setState({playersMark: newMark})
        endGame()
        checkForWin()
        playersTurn()
        console.log("button clicked")
    }

    render(){
        let {playersMark, squareIndex}=this.state
        return(
            <div onClick={this.onbtnClick} id = "Square">
            <h1>{playersMark}</h1>
            </div>
        )
    }
}

export default Square
