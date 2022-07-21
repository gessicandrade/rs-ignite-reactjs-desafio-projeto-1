import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import styles from './App.module.css'
import './global.css'
import { ListTask } from './components/ListTask'

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <NewTask />
        <ListTask />
      </main>
    </>
  )
}

export default App
