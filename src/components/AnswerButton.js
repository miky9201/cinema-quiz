import React from 'react'

const AnswerButton = ({ buttonType, setResponse }) => {

      const handleClick = () => buttonType === "yes" ? setResponse(true) : setResponse(false)

      return (
            <div>
                  <button onClick={handleClick}>{ buttonType }</button>
            </div>
      )
}

export default AnswerButton
