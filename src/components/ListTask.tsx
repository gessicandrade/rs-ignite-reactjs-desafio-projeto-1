import { ClipboardText, Trash } from "phosphor-react";
import styles from "./ListTask.module.css";
import { ListTaskHeader } from "./ListTaskHeader";

interface Task {
  id: string;
  title: string;
  isComplete: boolean;
}

interface ListTaskProps {
  tasks: [Task]
  setTasks: ([]) => Task
}

export function ListTask({ tasks, setTasks }: ListTaskProps) {
  function handleClickTask(id: string) {
    const updateTask = tasks.map(task => {
      if (task.id === id) {
        return {...task, isComplete: !task.isComplete}
      }

      return task
    })
    
    setTasks(updateTask);
  }

  function handleDeleteTask(id: string) {
    const newListWithDeleted = tasks.filter(task => (
      task.id !== id
    ))

    setTasks(newListWithDeleted);
  }
  
  const tasksisComplete = tasks.length > 0 ? tasks.filter(task => (task.isComplete)) : [];

    return (
      <>
        <ListTaskHeader countTask={tasks.length} taskisComplete={tasksisComplete.length} />
        <section className={tasks.length > 0 ? styles.section : styles.sectionEmpty}>
          {tasks.length > 0 ? (
          <ul>
            {tasks.map(task => (
            <li key={task.id}>
              <input type="checkbox" onClick={() => handleClickTask(task.id)} />
              <p className={task.isComplete ? styles.isComplete : '' }>{task.title}</p>
              <button onClick={() => {handleDeleteTask(task.id)}} title="Deletar tarefa">
                <Trash size={24} />
              </button>
            </li>
            ))}
          </ul>
          ) : (
            <div>
              <ClipboardText size={56} color={'#333333'} />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong> 
                <br /> 
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )}
        </section>
      </>
    )
  }