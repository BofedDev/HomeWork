import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title='Bogdan' />
      <Card text='How are you?' />
      <Card title='Bogdan' text='How are you?' />
    </>
  )
}

export default App
