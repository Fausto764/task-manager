import "../modalCreateTask/modalCreateTask.css"
import { useContext } from "react"
import { TaskContext } from "../../TaskContext/TaskContext"
const ModalUpdateTask = () => {
  const {
    tasks,
    setTasks,
    modalUpdate,
    setModalUpdate,
    register,
    setRegister,
    currentIndex,
    // setCurrentIndex,
  } = useContext(TaskContext)
  const handleUpdateTask = (e) => {
    e.preventDefault()
    if (register.trim() !== "") {
      setTasks((prevList) => {
        prevList = [...tasks]
        prevList[currentIndex] = register
        window.localStorage.setItem("tasks", JSON.stringify(prevList))
        return prevList
      })
      setRegister("") // Limpia el input después de agregar una tarea
      // setCurrentIndex("")
      setModalUpdate(false)
    }
  }

  return (
    <form
      style={{ display: modalUpdate ? "flex" : "none" }}
      onSubmit={handleUpdateTask}
    >
      <input
        type="text"
        placeholder="Write the task you want to edit!"
        value={register}
        onChange={(e) => setRegister(e.target.value)}
      />
      <button type="submit">Edit</button>
    </form>
  )
}
export { ModalUpdateTask }
