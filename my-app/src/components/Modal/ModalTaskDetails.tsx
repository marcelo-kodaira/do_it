import {  Box, Button, Center, Flex, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { FaBox, FaCube, FaExclamation, FaTrash } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { useTasks } from "../../contexts/TasksContext";
import { theme } from "../../styles/theme";

interface Task{
    id: string,
    nome: string,
    email: string,
    telefone: string,
    createdAt: Date,
    updatedAt: Date
}

interface ModalTaskDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task
}

const ModalTaskDetails = ({ isOpen, onClose, task}: ModalTaskDetailsProps) =>{
    
    const {token} = useAuth()
    const {deleteTask} = useTasks()

    const handleDelete = () =>{
        deleteTask(task.id,token)
        onClose()
    }
    
    return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="2" bg="white" color="gray.800">
        <ModalHeader display="flex" justifyContent="space-between">
            <Flex>
                <Center bg="green"  w="30px" h="30px" borderRadius="5px">
                    <FaCube color={theme.colors.white}/>
                </Center>
            </Flex>
            <Text fontWeight="bold" ml="2">Visualizar</Text>

            <HStack spacing="2">

                <Center as="button" onClick={handleDelete} w="30px" h="30px" borderWidth="1px" borderRadius="5px" borderColor="gray.200" bgColor="white">
                    <FaTrash color={theme.colors.gray['300']} />
                </Center>
                
                <Center>
                    <ModalCloseButton bg="green" color="white" _hover={{bg: "red.700"}}/>
                </Center>

            </HStack>

            </ModalHeader>

          <ModalBody>
            <Heading as="h1" fontSize="2xl">{task.nome}</Heading>
            <Text color="gray.500">
                {task.email}
                {task.telefone}
            </Text>
          </ModalBody>

        </ModalContent>

      </Modal>
    )
}

export default ModalTaskDetails