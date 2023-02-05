import { Button, Center, Flex, useDisclosure } from "@chakra-ui/react"
import { FaSearch } from "react-icons/fa"
import { Input } from "."
import { theme } from "../../styles/theme"
import ModalCreateTask from "../Modal/ModalCreateTask"

const SearchBox = () =>{
    const {isOpen, onClose, onOpen} = useDisclosure()
    return(
        <>
            <ModalCreateTask isOpen={isOpen} onClose={onClose}/>
            <Flex mt="6" w="100%" paddingX={['4','8']} paddingY="2" paddingBottom="6" borderBottomWidth="1px" borderColor="gray.50">
                <Flex as="form">
                    <Input placeholder="Pesquisar por tarefa"  w="35vw" h="60px" name="title"/>
                    <Center as="button" borderRadius="8px" ml="2" w="65px" h="60px" fontSize="2xl" bg="purple.600">
                        <FaSearch color={theme.colors.white}/>
                    </Center>
                </Flex>
                <Button onClick={onOpen} bg="purple.500" color="white" paddingX="16" ml="4" h="60px" borderRadius="8px" _hover={{bg: 'purple.600'}}>Adicionar uma nova tarefa</Button>
            </Flex>
        </>
    )
}

export default SearchBox