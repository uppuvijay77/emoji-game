// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClicking = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button className="btn" type="button" onClick={onClicking}>
        <img className="emoji" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
