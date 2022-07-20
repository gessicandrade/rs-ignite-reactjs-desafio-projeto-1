import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <NewTask />
      </main>
    </>
  )
}

export default App
