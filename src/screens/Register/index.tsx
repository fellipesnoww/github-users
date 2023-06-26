import React, {useState} from 'react';
import GitLogo from '../../assets/github_logo.png';
import BackArrow from '../../assets/icons/arrow_back.svg';
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
  BackButton,
  Content,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useUsers} from '../../hooks/useUsers';

interface RegisterProps {
  showBackAction?: boolean;
}

export default function Register({showBackAction = false}: RegisterProps) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const {addUser} = useUsers();
  const navigation = useNavigation();

  function navigateToHome() {
    Keyboard.dismiss();
    setLoading(false);
    navigation.navigate('Home');
  }

  function handleAddNewUser() {
    setLoading(true);
    addUser(username, navigateToHome, () => setLoading(false));
  }

  function handleCloseModal() {
    navigation.goBack();
  }

  return (
    <Content>
      <KeyboardAvoidingView behavior="position">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            {showBackAction && (
              <BackButton onPress={handleCloseModal}>
                <BackArrow />
              </BackButton>
            )}
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
              disabled={!username}
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
    </Content>
  );
}
