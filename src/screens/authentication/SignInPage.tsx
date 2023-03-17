import { useState } from "react"
import styled from "styled-components"
import { useTranslation } from 'react-i18next';
import actions from "store/actions";
import { dispatch } from "store";
import assetsPicker from "assets/assetsPicker";
import { colors } from "constants/index";
import { PageRoutes } from 'constants/index';
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  }
  const onPressSignIn = () => {
    dispatch(actions.authentication.signIn({
      email,
      password
    }))
  }
  const onPressSignUp = () => {
    navigate(PageRoutes.SignUp)
  }

  return (
    <Container>
      <Logo src={assetsPicker.images.signInLogo}>
      </Logo>
      <Form>
        <Label>{t('authentication.signIn.email')}</Label>
        <EmailInput type={'email'} value={email} onChange={onChangeEmail} />
        <Label>{t('authentication.signIn.password')}</Label>
        <PasswordInput type={'password'} value={password} onChange={onChangePassword} />
        <LoginButton onClick={onPressSignIn}>{t('authentication.signIn.signIn')}</LoginButton>
      </Form>
      <SignUpButton onClick={onPressSignUp}>{t('authentication.signUp.clickToSignUp')}</SignUpButton>
    </Container>
  )
}
const Form = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`
const Label = styled.label`
  font-size: 20px;
  align-items: left;
  color: white
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
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  ${colors.Malibu.Rgb()} 0%, ${colors.Anakiwa.Rgb()} 90.1% );
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
    transition: 0.7s;
    background-color: #9688B3;
  }
  &:focus {
    transition: 0.7s;
    background-color: #AC88B3;
  }
  &:active {
    background-color: #69598B;
  }
`
const SignUpButton = styled(Button)`
  background-color: #494D5F;
  color: white;
  border: none;
  font-weight: bold;
  &:hover {
    transition: 0.7s;
    background-color: #58628D;
  }
  &:focus {
    background-color: #69588D;
  }
  &:active {
    background-color: #444C6D;
  }
`
const Logo = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 10px;
`

export default SignInPage;