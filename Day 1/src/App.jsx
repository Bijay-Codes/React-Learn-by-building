import { useEffect, useState, useRef } from 'react'
import './app.css';
export default App

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
function handleCycle(setMood, count, id) {
  id.current = setInterval(() => {
    if (count.current >= moodData.length) {
      count.current = 0;
    }
    setMood(moodData[count.current].mood)
    count.current++;
  }, 3000);
}
