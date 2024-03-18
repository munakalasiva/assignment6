import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  flex-wrap: wrap;
  margin-top: 60px;
`

export const GameButton = styled.button`
  width: 150px;
  width: 150px;
  background-color: transparent;
  border-style: none;
  outline: none;
`

export const GameImage = styled.img`
  width: 150px;
  width: 150px;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
`

export const ResultName = styled.p`
  color: white;
  font-size: 20px;
`
export const ResultImage = styled.img`
  height: 100px;
  width: 100px;
`

export const ResultText = styled.p`
  color: white;
  font-size: 25px;
`

export const PlayAgainButton = styled.button`
  color: #223a5f;
  padding: 20px;
  border-radius: 10px;
`
