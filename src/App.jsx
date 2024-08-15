
import './App.css'
import { MainContent } from './components/MainContent'
import { Sidebar } from './components/Sidebar'

function App() {
  return(
    <>
    
    <Other></Other>
    </>
  )
}

function Other(){
  return <div className='flex'>
  <Sidebar></Sidebar>
  <MainContent className='grow'></MainContent>
  </div>
}

export default App
