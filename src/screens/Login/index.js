import React, {useState} from 'react';
import {Keyboard, Platform, Alert} from 'react-native';
import Login from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const userLogin = async () => {
    if (cpf.trim() && !!password.trim()) {
      let result = await api.login(cpf, password);
      setLoading(true);
      if (result.error === '') {
        dispatch({
          type: 'setToken',
          payload: {
            token: result.token,
          },
        });
        dispatch({
          type: 'setUser',
          payload: {
            user: result.user,
          },
        });
        setLoading(false);
        navigation.reset({
          index: 1,
          routes: [{name: 'Property'}]
        });
      } else {
        console.log(result.error);
        Alert.alert('Usuário e/ou senha inválidos!');
        setLoading(false);
      }
    } else {
      Alert.alert('Por favor, preencha os campos!');
    }
  };

  const userRegister = () => {
    navigation.navigate('Register');
  };

  const userForgotPassword = () => {};

  return (
    <Login.Avoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Login.Keyboard onPress={Keyboard.dismiss}>
        <Login.Container>
          <Login.Logo
            source={require('../../assets/login.png')}
            resizeMode="contain"
          />
          <Login.Field
            placeholder="Digite seu CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={(value) => setCpf(value)}
          />
          <Login.Field
            placeholder="Digite sua senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Login.ButtonArea onPress={userLogin}>
            {loading ? (
              <Login.Loading color="#fff" size="small" />
            ) : (
              <Login.ButtonText>ENTRAR</Login.ButtonText>
            )}
          </Login.ButtonArea>
          <Login.ButtonArea onPress={userRegister}>
            <Login.ButtonText>CADASTRE-SE</Login.ButtonText>
          </Login.ButtonArea>
          <Login.ButtonLink onPress={userForgotPassword}>
            <Login.Link>Esqueci minha senha</Login.Link>
          </Login.ButtonLink>
        </Login.Container>
      </Login.Keyboard>
    </Login.Avoiding>
  );
};
