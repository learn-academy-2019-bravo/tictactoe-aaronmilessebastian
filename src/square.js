import React, {Component} from 'react'

class Square extends Component {
 constructor(props) {
   super(props)
   this.state = {
     playersMark: ''
   }
 }
 
 onbtnClick = () => {
   let { playersMark, playersTurn, moveLog, index, checkForWin, endGame } = this.props
   let newMark = playersMark()
   moveLog(index)
   checkForWin()
   playersTurn()
   this.setState({playersMark: newMark})
 }

 render() {
   let { playersMark } = this.state
   return (
     <div id = 'Square' onClick = { this.onbtnClick } >
       <h1> { playersMark } </h1>
     </div>
   )
 }
}

export default Square
