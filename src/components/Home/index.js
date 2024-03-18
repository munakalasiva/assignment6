import {Component} from 'react'

import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import ScoreView from '../ScoreView'
import GameResultsView from '../GameResultsView'

import {
  MainContainer,
  RulesView,
  PopupView,
  PopupImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Home extends Component {
  state = {
    isShow: true,
    newArray: [choicesList[0], choicesList[1]],
    text: 'YOU WON',
    score: 0,
  }

  getResults = (item1, item2) => {
    if (item1.id === 'ROCK') {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU WON'

        case 'PAPER':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else if (item1.id === 'SCISSORS') {
      switch (item2.id) {
        case 'ROCK':
          return 'YOU LOSE'

        case 'PAPER':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (item2.id) {
        case 'SCISSORS':
          return 'YOU LOSE'

        case 'ROCK':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  restartGame = () => this.setState({isShow: true})

  checkResult = id => {
    const {score} = this.state
    const choice1 = choicesList.filter(eachValue => eachValue.id === id)
    const choice2 = choicesList[Math.floor(Math.random() * choicesList.length)]

    const result = this.getResults(choice1[0], choice2)

    let newScore = score

    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }

    this.setState({
      isShow: false,
      newArray: [choice1[0], choice2],
      text: result,
      score: newScore,
    })
  }

  render() {
    const {score, text, isShow, newArray} = this.state

    return (
      <MainContainer>
        <ScoreView score={score} />
        <GameResultsView
          choicesList={choicesList}
          text={text}
          isShow={isShow}
          newArray={newArray}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />

        <RulesView>
          <Popup modal trigger={<button type="button">RULES</button>}>
            {close => (
              <PopupView>
                <button type="button" onClick={() => close()}>
                  <RiCloseLine />.
                </button>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </RulesView>
      </MainContainer>
    )
  }
}

export default Home
