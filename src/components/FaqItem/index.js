// Write your code here.

import './index.css'

const FaqItem = props => {
  const {uid, questionText, answerText, onClickimg, open} = props

  const onClickOpen = () => {
    onClickimg(uid)
    console.log(open)
  }

  const imgUrl = open
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const imgAlt = open ? 'minus' : 'plus'

  return (
    <li className="li">
      <div className="li-top">
        <h1 className="qh">{questionText}</h1>
        <img onClick={onClickOpen} alt={imgAlt} src={imgUrl} />
      </div>
      {open ? (
        <div>
          <hr className="line" />
          <p className="ah">{answerText}</p>
        </div>
      ) : (
        ''
      )}
    </li>
  )
}

export default FaqItem
