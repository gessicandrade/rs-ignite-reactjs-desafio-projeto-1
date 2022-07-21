import { ClipboardText } from "phosphor-react";
import styles from "./ListTask.module.css";

export function ListTask() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.createdTasks}>Tarefas Criadas <span>0</span></div>
        <div className={styles.completedTasks}>Concluídas <span>0</span></div>
      </header>
      <section className={styles.section}>
        <ClipboardText size={56} color={'#333333'} />
        <p><strong>Você ainda não tem tarefas cadastradas</strong> <br /> Crie tarefas e organize seus itens a fazer</p>
      </section>
    </>
  )
}