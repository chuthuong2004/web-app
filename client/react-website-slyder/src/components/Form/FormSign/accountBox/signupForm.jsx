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
import { signupUser } from "../../../../api/apiRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function SignupForm(props) {

  const { switchToSignin } = useContext(AccountContext);

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      password: password,
    }

    signupUser(newUser, dispatch, navigate)
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSignUp}>
        <Input 
          type="text" 
          placeholder="User" 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <Input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
        />
        
        <SubmitButton type="submit"> Sign up </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="/signup">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
