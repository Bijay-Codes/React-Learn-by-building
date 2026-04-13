import { useEffect, useState, useRef } from 'react'
import './app.css';
export default App
/*
function App() {
  const [mood, setMood] = useState('Normal');
  let count = useRef(0);
  let id = useRef(null);
  useEffect(() => {
    handleCycle(setMood, count, id);
    return () => clearInterval(id.current)
  }, []);

  return (
    <div className={"mood-proj"}>
      <div className={`mood-card ${mood}`}>mood</div>
      <button className={`mood-button ${mood}`}>{mood}</button>
    </div>
  )
}
*/
const moodData = [
  {
    mood: 'Happy',
    emoji: '😀'
  },
  {
    mood: 'Sad',
    emoji: '🥲'
  },
  {
    mood: 'Angry',
    emoji: '😠'
  },
  {
    mood: 'Calm',
    emoji: '🤗'
  }
]
/*
function handleCycle(setMood, count, id) {
  id.current = setInterval(() => {
    if (count.current >= moodData.length) {
      count.current = 0;
    }
    setMood(moodData[count.current].mood)
    count.current++;
  }, 3000);
}
*/
function App() {
  const [mood, setMood] = useState('Normal 🙂');
  let i = useRef(0);

  return (
    <div className='mood-proj'>
      <div className={`mood-card ${sliceEmoji(mood)}`}>{mood}</div>
      {/* <button className={`mood-button ${mood}`} onClick={() => handleClick(i, setMood)}>Click me</button> */}
      <Button callback={() => handleClick(i, setMood)} mood={mood} />
    </div>
  )
}
function Button({ callback, mood }) {
  return (
    <button className={`mood-button ${sliceEmoji(mood)}`} onClick={callback}>{!mood ? 'Click me' : mood}</button>
  )
}
function handleClick(i, setMood) {
  if (i.current >= moodData.length) {
    i.current = 0;
  }
  console.log(i.current)
  setMood(moodData[i.current].mood + ' ' + moodData[i.current].emoji);
  i.current++;
}

function sliceEmoji(input) {
  console.log(input.slice(0, input.length - 2))
  return input.slice(0, input.length - 2);
}