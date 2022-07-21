import styles from './ListTaskHeader.module.css'

interface ListTaskHeaderProps {
  countTask: number;
  taskisComplete: number;
}

export function ListTaskHeader({ countTask, taskisComplete }: ListTaskHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.createdTasks}>Tarefas Criadas <span>{countTask}</span></div>
      <div className={styles.isCompleteTasks}>Concluídas <span>{taskisComplete} de {countTask}</span></div>
    </header>
  )
}