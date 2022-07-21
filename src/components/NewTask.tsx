import styles from "./NewTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface newTaskProps {
  tasks: [Task]
  setTasks: ([]) => void
}

export function NewTask({ tasks, setTasks }: newTaskProps) {
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    
    setTasks([...tasks, {id: uuidv4(), title: newTaskText, isComplete: false}]);
    setNewTaskText('');
  }

  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <input type="text" name="title" placeholder="Adicione uma nova tarefa" value={newTaskText} onChange={handleNewTaskChange} />
      <button type="submit">Criar <PlusCircle size={20} className={styles.iconAdd} /></button>
    </form>
  )
}