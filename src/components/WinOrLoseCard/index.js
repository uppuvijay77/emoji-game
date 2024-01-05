// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {score, isTrue, topScore, onPlayAgain} = props

  const onClickingPlayAgain = () => {
    onPlayAgain()
  }
  const isWin = isTrue && score === 12

  return (
    <div>
      {isWin ? (
        <div className="result-container">
          <div className="result">
            <h1 className="result-heading">You Win</h1>
            <p className="score">Best Score</p>
            <p className="score">{score}/12</p>
            <button className="result-btn" type="button">
              Play Again
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              className="result-image"
              alt="lose-game"
            />
          </div>
        </div>
      ) : (
        <div className="result-container">
          <div className="result">
            <h1 className="result-heading">You Loss</h1>
            <p className="score">Score{topScore}</p>
            <p className="score">{score}/12</p>
            <button
              className="result-btn"
              type="button"
              onClick={onClickingPlayAgain}
            >
              Play Again
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              className="result-image"
              alt="lose-game"
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default WinOrLossCard
