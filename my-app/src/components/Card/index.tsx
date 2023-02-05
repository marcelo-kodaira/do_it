import { Box, Center, Flex, Heading, HStack, Progress, Text } from "@chakra-ui/react"
import { FaCheck, FaTrash } from "react-icons/fa"
import { useAuth } from "../../contexts/AuthContext"
import { useTasks } from "../../contexts/TasksContext"
import { theme } from "../../styles/theme"


interface Task{
    id: string
    nome: string
    email: string
    telefone: string
    createdAt: Date
    updatedAt: Date
}

interface CardProps{
    task: Task
    onClick: (task: Task)=> void;
}


const Card = ({task, onClick}:CardProps) =>{
    
    const {token} = useAuth()
    const{deleteTask,updateTask} = useTasks()
    //fazer um modal abrir quando clicar em update Task, fazendo com que o usuario possa escolher as informações que ele deseja mudar
    
    return(
        <Box 
            cursor="pointer" 
            _hover={{transform: 'translateY(-7px)',borderColor: "gray.100"}}
            transition="border .2s, ease 0s, transform .2s"
            borderWidth="1px"
            borderColor="gray.50"
            boxShadow="base"
            padding="7"
            w={["80vw","auto"]}
        >
            <Flex justify="space-between">
                <Heading as="h2" size="md">{task.nome}</Heading>
                <HStack spacing="4">

                    <Center as="button" onClick={() => deleteTask(task.id,token)} w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white">
                        <FaTrash color={theme.colors.gray['300']} />
                    </Center>

                    <Center as="button"  w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white">
                        <FaCheck color={theme.colors.gray['300']} />
                    </Center>

                </HStack>
            </Flex>

            <Box onClick={() => onClick(task)} w="100%" mt="4">
                <Text>{task.telefone} - {task.email}</Text>
                <Progress colorScheme="purple" mt="2.5" value={10}/>
                <Text color="gray.200" mt="3">Criado em</Text>
            </Box>
        </Box>
    )
}

export default Card