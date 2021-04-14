import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Preload from './styles';
import api from '../../services/api';
import {useStateValue} from '../../contexts/StateContext';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  useEffect(() => {
    const checkLogin = async () => {
      let token = await api.getToken();
      if (token) {
        let result = await api.validateToken();
        if (result.error === '') {
          dispatch({
            type: 'setUser',
            payload: {
              user: result.user,
            },
          });
          navigation.reset({
            index: 1,
            routes: [{name: 'Property'}],
          });
        } else {
          alert(result.error);
          dispatch({type: 'setToken', payload: {token: ''}});
          navigation.reset({
            index: 1,
            routes: [{name: 'Login'}],
          });
        }
      } else {
        navigation.reset({
          index: 1,
          routes: [{name: 'Login'}],
        });
      }
    };

    checkLogin();
  }, []);

  return (
    <Preload.Container>
      <Preload.Title>Carregando...</Preload.Title>
      <Preload.Logo
        resizeMode="contain"
        source={require('../../assets/loading.png')}
      />
    </Preload.Container>
  );
};
