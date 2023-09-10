import { TaskContext } from "./TaskContext"
import { useState } from "react"
const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [modalCreate, setModalCreate] = useState(false)
  const [modalUpdate, setModalUpdate] = useState(false)
  const [register, setRegister] = useState("")
  const [currentIndex, setCurrentIndex] = useState("")

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        modalCreate,
        setModalCreate,
        register,
        setRegister,
        modalUpdate,
        setModalUpdate,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
export { TaskContextProvider }
