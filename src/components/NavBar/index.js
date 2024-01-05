// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, isTrue} = props

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img
          className="nav-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {isTrue && score < 12 ? (
        <div className="score-container">
          <p className="score">Score: {score} </p>
          <p className="score">Top Score: {totalScore} </p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
