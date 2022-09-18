import React, { useState } from 'react'
import Board from './components/Board'
import './styles/main.scss'
import { calculateWinner } from './helpers'

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(false)
  const winner = calculateWinner(board)

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O'
        }

        return square
      })
    })

    setIsXNext((prev) => !prev)
  }
  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <h2>{winner ? 'Winner: ' + winner : 'Next Player: ' + (isXNext ? 'X' : 'O')}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App