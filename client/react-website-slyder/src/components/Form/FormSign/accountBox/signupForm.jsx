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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [email, setEmail] = useState("")
  const {username, setUsername} = useState("")
  const {password, setPassword} = useState("")

  const handleSignUp = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      email: email,
      password: password,
    }
    
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSignUp}>
        <Input type="text" placeholder="Full Name" onChange={(e) => setUsername(e.target.value)} />
        <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit"> Sign up </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
