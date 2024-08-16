
import { createContext, useContext, useState } from 'react'
import './App.css'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'

  const Theme = createContext()
 export  const useTheme = ()=>{
  return useContext(Theme)
 }
function App() {
  const [darkMode , setDarkMode] = useState(false)
  const toggle = ()=>{
    setDarkMode(!darkMode)
  }
 return ( <Theme.Provider value={{darkMode , toggle}}>
 <div className={` ${darkMode && "dark"}`}>
  <Other></Other>
 </div>
 </Theme.Provider>)
}

function Other(){
  return <div className='flex dark:bg-neutral-900'>
  <Sidebar></Sidebar>
  <MainContent className='grow'></MainContent>
  </div>
}

export default App
