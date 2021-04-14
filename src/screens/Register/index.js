import React, {useState, useEffect} from 'react';
import {Keyboard, Platform, Alert} from 'react-native';
import Register from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStateValue} from '../../contexts/StateContext';
import api from '../../services/api';

export default () => {

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Cadastro',
    })
  }, []);

  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const userRegister = async () => {
    if(name && email && cpf && password && passwordConfirm) {
      let result = await api.register(name, email, cpf, password, passwordConfirm);
      setLoading(true);
      if(result.error === "") {
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
        setLoading(false);
        Alert.alert(result.error);
      }
    } else {
      setLoading(false);
      Alert.alert('Por favor, preencha todos os campos!');
    }
  }

  return (
    <Register.Avoiding behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Register.Keyboard onPress={Keyboard.dismiss}>
        <Register.Container showsVerticalScrollIndicator={false}>
        <Register.Title>Quase lá, falta pouco!</Register.Title>
        <Register.Description>Preencha o formulário abaixo para se cadastrar.</Register.Description>
        <Register.Field
            placeholder="Nome completo"
            value={name}
            onChangeText={(value) => setName(value)}
          />
          <Register.Field
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Register.Field
            placeholder="CPF"
            keyboardType="numeric"
            value={cpf}
            onChangeText={(value) => setCpf(value)}
          />
          <Register.Field
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Register.Field
            placeholder="Confirmar senha"
            secureTextEntry={true}
            value={passwordConfirm}
            onChangeText={(value) => setPasswordConfirm(value)}
          />
          <Register.ButtonArea onPress={userRegister}>
            {loading ? (
              <Register.Loading color="#fff" size="small" />
            ) : (
              <Register.ButtonText>CADASTRAR</Register.ButtonText>
            )}
          </Register.ButtonArea>
        </Register.Container>
      </Register.Keyboard>
    </Register.Avoiding>
  );
};
