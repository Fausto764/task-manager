import { useContext } from "react"
import { TaskContext } from "../../TaskContext/TaskContext"
import { Tasks } from "../Tasks/Tasks"
import { ModalCreateTask } from "../ModalCreateTask/ModalCreateTask"

import { ModalUpdateTask } from "../modalUpdateTask/ModalUpdateTask"
import "./basicTable.css"
const BasicTable = () => {
  const { setModalCreate } = useContext(TaskContext)
  const handleModalCreate = () => {
    setModalCreate(true)
  }
  return (
    <section className="section-tasks-container">
      <header className="header-tasks">
        <h3>Tasks</h3>
        <ul className="header__ul">
          <li className="header__ul__li">Delete Tasks</li>
          <li className="header__ul__li" onClick={handleModalCreate}>
            Create New Task
          </li>
        </ul>
      </header>
      <ModalCreateTask />
      <ModalUpdateTask />
      <div className="article-container">
        <Tasks />
      </div>
    </section>
  )
}
export { BasicTable }
