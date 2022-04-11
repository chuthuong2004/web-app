import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Form.elements";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { loginUser } from "../../../../api/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const {username, setUsername} = useState("")
  const {password, setPassword} = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e) =>{
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
    }

    loginUser(newUser,dispatch,navigate)
  }

  return (
    <BoxContainer >
      <FormContainer onSubmit={handleLogin}>
        <Input 
          type="text" 
          placeholder="Enter your username" 
          onChange={(e) => setUsername(e.target.value)} 
        />

        <Input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <SubmitButton type="submit">Sign in</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign up
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
