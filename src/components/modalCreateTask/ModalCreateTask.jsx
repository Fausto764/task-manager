import "./modalCreateTask.css"
import { useContext } from "react"
import { TaskContext } from "../../TaskContext/TaskContext"
const ModalCreateTask = () => {
  const {
    tasks,
    setTasks,
    modalCreate,
    setModalCreate,
    register,
    setRegister,
  } = useContext(TaskContext)
  const handleCreateTask = (e) => {
    e.preventDefault()
    if (register.trim() !== "") {
      setTasks([...tasks, register])
      setRegister("") // Limpia el input después de agregar una tarea
      setModalCreate(false)
    }
  }

  return (
    <form
      style={{ display: modalCreate ? "flex" : "none" }}
      onSubmit={handleCreateTask}
    >
      <input
        type="text"
        placeholder="Write the task you want to add!"
        value={register}
        onChange={(e) => setRegister(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
export { ModalCreateTask }
