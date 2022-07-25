import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import phrases from './json/phrases.json'
import QuoteBox from './components/QuoteBox'

function App() {
  const getRandomElement = arr => {
    return Math.floor(Math.random() * arr.length)
  }

  const getRandomColor = () => {
    const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d']
    let color = '#'
    for(let i =0; i < 6; i++) {
      color += hex[getRandomElement(hex)]
    }
    return color
  }

  const [randomPhrase, setRadomPhrase] = useState(phrases[getRandomElement(phrases)])
  const [randomColor, setRandomColor] = useState(getRandomColor())

  const handlerChange = () => {
    setRadomPhrase(phrases[getRandomElement(phrases)])
    setRandomColor(getRandomColor())
  }

  return (
    <div className="App" style={{'--color': randomColor}}>
      <QuoteBox phrase={randomPhrase} randomColor={randomColor} handlerChange={handlerChange}/>
    </div>
  )
}

export default App
