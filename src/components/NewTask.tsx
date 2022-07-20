import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTask() {
  return (
    <form className={styles.form}>
      <input type="text" name="title" placeholder="Adicione uma nova tarefa" />
      <button type="submit">Criar <PlusCircle className={styles.iconAdd} /></button>
    </form>
  )
}