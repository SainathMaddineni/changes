import React from 'react'
import { FormControl, FormLabel, Input, Button, Select,Box } from "@chakra-ui/react"
import {AddIcon } from "@chakra-ui/icons"
import { useForm } from "react-hook-form"

function LoginIntegration() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data); 

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box   bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">
        <Box width="300px" maxW="lg" mx="auto" > 
            <br />
            <br />
            <br />    
        <FormControl height="77vh">     
            <FormLabel><strong>Quote Of The Project :</strong></FormLabel>
            <Select placeholder="Select" borderColor="black" {...register("project quote",{required:true})}>
                <option>Web</option>
                <option>Mobile</option>
                <option>IOS</option>
            </Select><br />
            <FormLabel><strong>Scale Of Project :  </strong></FormLabel>
            <Select placeholder="Select" borderColor="black" {...register("project scale",{required:true})}>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
            </Select><br/>
            <FormLabel><strong>Email or Phone Number : </strong></FormLabel>
            <Input {...register("email or phone",{required:true})} placeholder="Enter Email or Phone" 
            borderColor="black" _placeholder={{color:"black"}} /><br /><br />
            <FormLabel><strong>Vender Ship :</strong> </FormLabel>
                    <FormLabel border="1.5px solid black" borderRadius="10px" width="300px">
                    <label htmlFor="file"> 
                    <AddIcon color="white" border="1px solid white" borderRadius="70%" padding="8px" 
                    backgroundColor="red" boxSize="40px" cursor="pointer" /> Choose a File... 
                    <Input {...register("vender ship",{required:true})} hidden type="file" id="file"/> </label>
                    </FormLabel><br />
                    <Button type="submit" colorScheme="blue" variant="solid">Submit</Button>
        </FormControl>
        <br />
        </Box>
        </Box>
        </form>
    )
}
export default LoginIntegration;