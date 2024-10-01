import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Food from './Food'
import Card from './Card'
import Button from './Button/Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MyComponent/>
      <List/>
      <Button/>
      <UserGreeting isLoggedIn={true} />

      <Student name="Antor Ansar" age={30} isStudent={true} />
      <Student name="Ankon Ansar" age={40} isStudent={false} />
      <Student name="Larry"/>
      <Button/>
      <Card/> 
      <Food/>
      <Footer/>
    </>
  );
}

export default App
