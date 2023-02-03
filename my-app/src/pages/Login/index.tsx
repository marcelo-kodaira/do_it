import { Box, Button, Flex, Grid, Heading, Image, Text, VStack } from "@chakra-ui/react"
import LogoPrimary from "../../assets/logo-primary.svg"
import { Input as FormInput } from "../../components/Form"
import {FaEnvelope, FaLock} from 'react-icons/fa'
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"

const signInSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    senha: yup.string().required("Senha obrigatória")
})

interface SignInData {
    email: string,
    senha: string
}

const Login = () =>{

    const [loading, setLoading] = useState(false)
    const {signIn,token,user} = useAuth()

    const {
        register,
        formState:{ errors },
        handleSubmit
    } = useForm<SignInData>({
        resolver: yupResolver(signInSchema)
    })

    const handleSignIn: SubmitHandler<SignInData> = (data:SignInData) => {
        setLoading(true)
        signIn(data)
        .then(() => setLoading(false) )
        .catch(err => {
            setLoading(false)
            console.log(err)
        })
    }

    return(
        <Flex  
        padding={["10px 15px", "10px 15px", "0px", "0px"]} 
        align="center"
        justifyContent="center" 
        h={['auto', 'auto', '100vh', '100vh']} 
        bgGradient={[
            "linear(to-b, purple.800 35%, white 65%)",
            "linear(to-b, purple.800 35%, white 65%)",
            "linear(to-r, purple.800 65%, white 35%)",
            "linear(to-r, purple.800 65%, white 35%)"
        ]} 
        color="white"
        >

            <Flex
            w={["100%","100%","90%","60%"]} 
            justifyContent="center" 
            flexDirection={["column","column","row","row"]} 
            alignItems="center"
            >
                
                <Grid 
                w={["100%","100%","50%","40%"]} paddingRight="100px">
                    <Image
                     src={LogoPrimary} 
                     alt="logo My Agenda" 
                     boxSize={["120px", "120px", "150px", "150px"]}
                     />
                    <Heading as="h1" mt="4">
                        O jeito fácil, grátis
                    </Heading>
                    <Text maxW="350px">
                        Flexível e atrativo de gerenciar 
                        <b>seus contatos em uma única plataforma</b>
                    </Text>
                </Grid>

                <Grid as="form" 
                onSubmit={handleSubmit(handleSignIn)} 
                w={["100%","100%","100%","60%","45%"]}
                mt={["4","4","0"]} 
                padding="30px 15px" 
                border="3px solid" 
                borderColor="gray.100" 
                bg="white" 
                color="gray.900"
                >
                    <Heading size="lg">Bem vindo de volta!</Heading>
                    <VStack spacing="5" mt="6">
                        <Box w="100%">
                            <FormInput  label="Login" type="email" icon={FaEnvelope} placeholder="Digite seu login" error={errors.email} {...register("email")}/>
                            {!errors.email && <Text ml="1" mt="1" color='gray.300'>Exemplo: nome@email.com</Text>}
                        </Box>
                    </VStack>

                        <FormInput  type="password" icon={FaLock} label="Senha"  placeholder="Digite sua senha" error={errors.senha} {...register("senha")}/>

                    <VStack mt="4" spacing="5">
                        <Button isLoading={loading} bg="purple.800" w="100%" h="60px" borderRadius="8px" _hover={{background: 'purple.900'}} color="white" type="submit">Entrar</Button>
                        <Text color="gray.400">Ainda ñao possui uma conta?</Text>
                        <Button  bg="gray.100" w="100%" h="60px" borderRadius="8px" _hover={{background: 'gray.200'}} color="gray.300" >Cadastrar</Button>
                    </VStack>
                </Grid>

            </Flex>
        </Flex>
    )
}

export default Login