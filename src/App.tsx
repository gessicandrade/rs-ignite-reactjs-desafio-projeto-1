import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import styles from './App.module.css'
import './global.css'
import { ListTask } from './components/ListTask'
import { useState } from 'react'

function App() {
  
  const [tasks, setTasks] = useState([]);
  
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <NewTask tasks={tasks} setTasks={setTasks} />
        <ListTask tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  )
}

export default App
