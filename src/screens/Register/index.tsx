import React, {useState} from 'react';
import GitLogo from '../../assets/github_logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Container,
  LogoContainer,
  Logo,
  Title,
  Description,
  Footer,
  UnderlinedDescription,
} from './styles';

export default function Register() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  function handleAddNewUser() {
    setLoading(true);
    console.log(username);
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        behavior="height">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <LogoContainer>
              <Logo source={GitLogo} />
            </LogoContainer>

            <Title>Buscar usuário</Title>
            <Description>
              {'Crie sua conta através do seu usuário\ndo GitHub'}
            </Description>
            <Input
              autoCorrect={false}
              placeholder="@username"
              autoCapitalize="none"
              onChangeText={setUsername}
              onSubmitEditing={handleAddNewUser}
              returnKeyType="go"
            />
            <Button
              text="Cadastrar"
              onPress={handleAddNewUser}
              loading={loading}
            />
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Footer>
        <Description>Termos de </Description>
        <UnderlinedDescription>política </UnderlinedDescription>
        <Description>e </Description>
        <UnderlinedDescription>privacidade</UnderlinedDescription>
      </Footer>
    </>
  );
}
