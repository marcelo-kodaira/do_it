import { useDisclosure } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ModalTaskDetails from "../../components/Modal/ModalTaskDetails"
import { useAuth } from "../../contexts/AuthContext"
import { useTasks } from "../../contexts/TasksContext"
import TaskList from "./TasksList"
import FirstTask from "./FirstTask"
import NotFound from "./NotFound"

interface Task{
    id: string,
    nome: string,
    email: string,
    telefone: string,
    createdAt: Date,
    updatedAt: Date
}
const Dashboard = () =>{
    
    const [loading,setLoading] = useState(true)
    const {token} = useAuth()
    const {tasks, loadTasks, notFound, taskNotFound} = useTasks()

    const[selectedTask, setSelectedTask] = useState<Task>({} as Task)

    const {isOpen: isTaskDetailsOpen , onOpen: onTaskDetailsOpen, onClose: onTaskDetailsClose} = useDisclosure()

    

    useEffect(() =>{
        loadTasks(token)
        .then(res => setLoading(false))
    },[])

    const handleClick = (task:Task) =>{
        setSelectedTask(task);
        onTaskDetailsOpen()
    }


    if(notFound){
        <NotFound isTaskDetailsOpen={isTaskDetailsOpen} onTaskDetailsClose={onTaskDetailsClose} selectedTask={selectedTask} taskNotFound={taskNotFound}/>
    }

    return(
        <>
            <ModalTaskDetails isOpen={isTaskDetailsOpen} onClose={onTaskDetailsClose} task={selectedTask}/>
            {
            !tasks.length && !loading ?
            <FirstTask/>
            :   
            <TaskList tasks={tasks} handleClick={handleClick} loading={loading} />
            }
        </>
    )
}

export default Dashboard