import {  Flex, useBreakpointValue } from "@chakra-ui/react"
import { useForm, SubmitHandler } from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react"
import SignUpForm from "./SignUpForm"
import SignUpInfo from "./SignUpInfo"
import GoBackButton from "./GoBakcButton"

const signUpSchema = yup.object().shape({
    email: yup.string().required('Email obrigatório').email('Email inválido'),
    senha: yup.string().required("Senha obrigatória"),
    confirm_senha: yup.string().required("Confirmação de senha obrigatória").oneOf([yup.ref('senha')], "Senhas diferentes"),
    nome: yup.string().required('Nome obrigatório'),
    telefone: yup.string().required('Telefone obrigatório')
})

interface SignUpData {
    email: string,
    senha: string,
    nome: string,
    telefone: string,
    confirm_senha: string
}

const SignUp = () =>{

    const [loading, setLoading] = useState(false)

    const {
        register,
        formState:{ errors },
        handleSubmit
    } = useForm<SignUpData>({
        resolver: yupResolver(signUpSchema)
    })

    const handleSignIn: SubmitHandler<SignUpData> = (data:SignUpData) => {
        console.log(data)
    }

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true
    })

    return(
        <Flex  
        padding={["10px 15px", "10px 15px", "0px", "0px"]} 
        align="center"
        justifyContent="center" 
        h={['auto', 'auto', '100vh', '100vh']} 
        bgGradient={[
            "linear(to-b, purple.800 35%, white 65%)",
            "linear(to-b, purple.800 35%, white 65%)",
            "linear(to-l, purple.800 65%, white 35%)",
            "linear(to-l, purple.800 65%, white 35%)"
        ]} 
        color="white"
        >

            <Flex
            w={["100%","100%","90%","60%"]} 
            justifyContent="center" 
            flexDirection={["column","column","row","row"]} 
            >
            {
                isWideVersion ? (
                    <>
                        <GoBackButton top="90" left="35"/>
                        <SignUpForm errors={errors} handleSignUp={handleSubmit(handleSignIn)} loading={loading} register={register}/>
                        <SignUpInfo/>
                    </>
                ):
                (
                    <>
                        <GoBackButton top="10" left="75vw"/>
                        <SignUpInfo/>
                        <SignUpForm errors={errors} handleSignUp={handleSubmit(handleSignIn)} loading={loading} register={register}/>
                    </>
                    )
            }
                

            </Flex>
        </Flex>
    )
}

export default SignUp