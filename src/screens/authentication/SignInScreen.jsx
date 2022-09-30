import { useState } from "react"
import styled from "styled-components"
import { useTranslation } from 'react-i18next';
import actions from "store/actions";
import { dispatcher } from "store";

const SignInScreen = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const onPressSignIn = () => {
    dispatcher(actions.authentication.signIn({
      email,
      password
    }))
  }
  const onSignUpNavigation = () => {
    console.log('test')
  }

  return (
    <Container>
      <Form>
        <Label>Email</Label>
        <EmailInput type={'email'} value={email} onChange={onChangeEmail} />
        <Label>Password</Label>
        <PasswordInput type={'password'} value={password} onChange={onChangePassword} />
        <LoginButton onClick={onPressSignIn}>{t('authentication.signIn.signIn')}</LoginButton>
      </Form>
      <SignUpButton onClick={onSignUpNavigation}>Click here to sign up</SignUpButton>
    </Container>
  )
}
const Form = styled.form`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 20px;
  align-items: left
`
const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  border: 2px solid #eee;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 5px;
`
const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #eee;
  border-radius: 5px;
`

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% );
`

const EmailInput = styled(Input)`
`

const PasswordInput = styled(Input)`
`

const LoginButton = styled(Button)`
  margin-left: auto;
  width: 100px;
  background-color: #d0bdf4;
  border: none;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: #9688B3;
  }
  &:focus {
    background-color: #AC88B3;
  }
  &:active {
    background-color: #69598B;
  }
`
const SignUpButton = styled(Button)`
`

export default SignInScreen;