import {
  ScoreContainer,
  ScoreName,
  ScoreBoard,
  ScoreHeading,
  ScoreResult,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props

  return (
    <ScoreContainer>
      <ScoreName>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </ScoreName>

      <ScoreBoard>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </ScoreBoard>
    </ScoreContainer>
  )
}

export default ScoreView
