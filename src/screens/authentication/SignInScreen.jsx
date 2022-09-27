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

  return (
    <Container>
      <EmailInput type={'email'} value={email} onChange={onChangeEmail} />
      <PasswordInput type={'password'} value={password} onChange={onChangePassword} />
      <LoginButton onClick={onPressSignIn}>{t('authentication.signIn.signIn')}</LoginButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const EmailInput = styled.input`
  margin-top: 10px;
`

const PasswordInput = styled.input`
  margin-top: 4px;
`

const LoginButton = styled.button`
  margin-top: 10px;
`

export default SignInScreen;