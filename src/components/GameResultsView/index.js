import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultContainer,
  ResultName,
  ResultImage,
  ResultText,
  PlayAgainButton,
} from './styledComponents'

const GameResultsView = props => {
  const {isShow, choicesList, checkResult, text, newArray, restartGame} = props

  const showView = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}

      {!isShow && (
        <>
          <ResultContainer>
            <ResultName>YOU</ResultName>
            <ResultImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultContainer>

          <ResultContainer>
            <ResultName>OPPONENT</ResultName>
            <ResultImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultContainer>

          <ResultContainer>
            <ResultText>{text}</ResultText>
            <PlayAgainButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </ResultContainer>
        </>
      )}
    </GameViewContainer>
  )
  return showView()
}

export default GameResultsView
