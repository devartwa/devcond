import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../services/api';
import Property from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStateValue} from '../../contexts/StateContext';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkPropertySelected = async () => {
      let property = await AsyncStorage.getItem('property');
      if (property) {
        property = JSON.parse(property);
        await selectProperty(property);
      }
      setLoading(false);
    };
    checkPropertySelected();
  }, []);

  //Função temporaria, remover
  const userLogout = async () => {
    await api.logout();
    navigation.reset({index: 1, routes: [{name: 'Login'}]});
  };

  const selectProperty = async (property) => {
    await AsyncStorage.setItem('property', JSON.stringify(property));
    dispatch({type: 'setProperty', payload: {property}});
    navigation.reset({index: 1, routes: [{name: 'MainDrawer'}]});
  };

  return (
    <Property.Container>
      <Property.Scroll>
        {loading && <Property.Loading color="#8863E6" size="small" />}
        {!loading && context.user.user.properties.length > 0 && (
          <>
            <Property.Title>Olá, {context.user.user.name}</Property.Title>
            <Property.Description>
              Escolha a propriedade desejada.
            </Property.Description>
            <Property.List>
              {context.user.user.properties.map((item, index) => (
                <Property.ButtonList
                  key={index}
                  onPress={() => selectProperty(item)}>
                  <Property.ButtonListName>{item.name}</Property.ButtonListName>
                </Property.ButtonList>
              ))}
            </Property.List>
          </>
        )}
        {!loading && context.user.user.properties.length <= 0 && (
          <Property.Area>
            <Property.Title>Olá, {context.user.user.name}</Property.Title>
            <Property.Description>
              O seu cadastro foi concluído com sucesso!
            </Property.Description>
            <Property.Description>
              Agora a administração precisa liberar o seu cadastro.
            </Property.Description>
          </Property.Area>
        )}
      </Property.Scroll>
      <Property.ButtonArea onPress={userLogout}>
        <Property.Button>SAIR</Property.Button>
      </Property.ButtonArea>
    </Property.Container>
  );
};
