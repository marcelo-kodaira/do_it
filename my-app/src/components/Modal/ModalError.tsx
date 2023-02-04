import { Button, Center, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { FaExclamation } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface ModalErrorProps {
    isOpen: boolean;
    onClose: () => void;
    error: string
}

const ModalError = ({ isOpen, onClose, error}: ModalErrorProps) =>(

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color="gray.800">
          <ModalHeader display="flex">
            <Center bg="red.500"  w="30px" h="30px" borderRadius="5px">
                <FaExclamation color={theme.colors.white}/>
            </Center>
            <Text fontWeight="bold" ml="2">Ooppss!</Text>
            </ModalHeader>
          <ModalCloseButton bg="red.600" color="white" _hover={{bg: "red.700"}}/>
          <ModalBody textAlign="center" color="gray.500">
            <Text><b>{error}</b></Text>
          </ModalBody>

          <ModalFooter display="column">
            <Button background="red.500" h="60px" color="white" w="100%" _hover={{bg: "red.600"}} onClick={onClose}>
              Tentar novamente
            </Button>
            <Text textAlign="center" mt="4">Tente novamente <b>clicando</b> no botão acima ou aguarde alguns minutos...</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
)

export default ModalError