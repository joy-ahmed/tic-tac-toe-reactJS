import React, { useState } from 'react'
import Board from './components/Board'
import './styles/main.scss'
import { calculateWinner } from './helpers'

const App = () => {
  const [history, setHistory] = useState([{ board: Array(9).fill(null), isXNext: true }])
  const [currentMove, setCurrentMove] = useState(0)
  const current = history[currentMove]

  const winner = calculateWinner(current.board)

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1]

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O'
        }

        return square
      })
      return prev.concat({ board: newBoard, isXNext: !last.isXNext })
    })
    setCurrentMove(prev => prev + 1)
  }
  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <h2>{winner ? 'Winner: ' + winner : 'Next Player: ' + (current.isXNext ? 'X' : 'O')}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App