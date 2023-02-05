import { Box, Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface Task{
    nome: string,
    email: string,
    telefone: string,
    createdAt: Date,
    updatedAt: Date
}

interface ModalTaskDeailsProps {
    isOpen: boolean;
    onClose: () => void;
    task: Task
}

const ModalTaskDeails = ({ isOpen, onClose}: ModalTaskDeailsProps) =>(

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent padding="2" bg="white" color="gray.800">
        <ModalHeader display="flex">
            <Center bg="green"  w="30px" h="30px" borderRadius="5px">
                <FaExclamation color={theme.colors.white}/>
            </Center>
            <Text fontWeight="bold" ml="2">Detalhes:</Text>
            </ModalHeader>
            <ModalCloseButton bg="green" color="white" _hover={{bg: "red.700"}}/>

          <ModalBody textAlign="center">
            <Text>
        
            </Text>
          </ModalBody>

          <ModalFooter flexDir="column">
            <Button  bg="purple.500" color="white" w="100%" h="60px"  _hover={{bg: "purple.600"}}>
            </Button>
            <Text textAlign="center" mt="4">
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
)

export default ModalTaskDeails