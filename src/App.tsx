import { Habit } from './components/Habit'
import './styles/global.css'

function App() {
  return (
    <>
      <h1>Habit</h1>
      <Habit completed={10} />
    </>
  )
}

export default App
