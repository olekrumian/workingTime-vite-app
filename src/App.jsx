import { useEffect } from 'react'
import './index.css'
import Main from './components/Main'

export default function App() {
  useEffect(() => {
    const hour = new Date().getHours()
    const body = document.body

    if (hour >= 7 && hour < 21) {
      body.classList.add('day-theme')
      body.classList.remove('night-theme')
    } else {
      body.classList.add('night-theme')
      body.classList.remove('day-theme')
    }
  }, [])

  return (
    <div className="container">
      <Main />
    </div>
  )
}
