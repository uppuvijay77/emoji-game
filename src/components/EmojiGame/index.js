/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    isTrue: true,
    isWin: false,
    selectedEmojiList: [],
  }

  onClickEmoji = id => {
    const {selectedEmojiList} = this.state

    if (!selectedEmojiList.includes(id)) {
      this.setState(prevState => ({
        selectedEmojiList: [...prevState.selectedEmojiList, id],
        score: prevState.score + 1,
        totalScore: prevState.totalScore + 1,
        isTrue: true,
      }))
      if (selectedEmojiList.length === 12) {
        this.setState({isWin: true})
      }
    } else {
      this.setState({isTrue: false, isWin: false})
    }
  }

  onPlayAgain = () => {
    const {score, totalScore} = this.state
    let topScore
    if (score >= totalScore) {
      topScore = score
    } else {
      topScore = totalScore
    }
    this.setState({
      isTrue: true,
      selectedEmojiList: [],
      score: 0,
      totalScore: topScore,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojisList} = this.props
    const {isTrue, isWin, score, totalScore} = this.state
    this.shuffledEmojisList()
    return (
      <div className="bg-container">
        <NavBar score={score} totalScore={totalScore} isTrue={isTrue} />
        <div className="btm-section">
          {isTrue && score < 12 ? (
            <ul className="emoji-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiDetails={eachEmoji}
                  key={eachEmoji.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))}
            </ul>
          ) : (
            <div>
              <WinOrLossCard
                isTrue={isTrue}
                isWin={isWin}
                score={score}
                topScore={totalScore}
                onPlayAgain={this.onPlayAgain}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame

/*

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
                    <p className="score">Score</p>
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
              )}
            </div>

 */
