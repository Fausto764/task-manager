import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import { useContext } from "react"
import { TaskContext } from "../../TaskContext/TaskContext"
import "./tasks.css"
const Tasks = () => {
  const { tasks, setTasks, setModalUpdate, setCurrentIndex } =
    useContext(TaskContext)
  const showTasks = tasks.map((elemento, index) => {
    function handleUpdateTask() {
      setModalUpdate(true)
      setCurrentIndex(index)
    }
    function handleDeleteTask() {
      setTasks(tasks.filter((item) => item !== elemento))
    }
    return (
      <>
        <article key={index} className="article-task">
          <p className="article__p-task">{elemento}</p>
          <div className="buttons-container" key={index + 1}>
            <FontAwesomeIcon icon={faPenToSquare} onClick={handleUpdateTask} />
            <FontAwesomeIcon icon={faTrash} onClick={handleDeleteTask} />
          </div>
        </article>
      </>
    )
  })
  return showTasks
}
export { Tasks }
