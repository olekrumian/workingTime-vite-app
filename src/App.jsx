import { useEffect } from 'react'
import './index.css'
import Main from './components/Main'

export default function App() {
  useEffect(() => {
    const setTheme = () => {
      const hour = new Date().getHours()
      const body = document.body

      if (hour >= 8 && hour < 19) {
        body.classList.add('day-theme')
        body.classList.remove('night-theme')
      } else {
        body.classList.add('night-theme')
        body.classList.remove('day-theme')
      }
    }

    setTheme()

    const intervalId = setInterval(() => {
      setTheme()
    }, 60000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className="container">
      <Main />
    </div>
  )
}
