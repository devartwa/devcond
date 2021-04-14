import React from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import {useNavigation} from '@react-navigation/native';
import {useStateValue} from '../contexts/StateContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faCalendarAlt,
  faCog,
  faFileAlt,
  faInbox,
  faQuestionCircle,
  faReceipt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

export default (props) => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();

  const menus = [
    {title: 'Mural de Avisos', icon: faInbox, screen: 'NoticeBoard'},
    {title: 'Documentos', icon: faFileAlt, screen: 'Documents'},
    {title: 'Reservas', icon: faCalendarAlt, screen: 'Reservations'},
    {title: 'Livros de Ocorrências', icon: faBook, screen: 'OccurrencesBook'},
    {
      title: 'Achados e Perdidos',
      icon: faQuestionCircle,
      screen: 'FoundAndLost',
    },
    {title: 'Boletos', icon: faReceipt, screen: 'Bills'},
    {title: 'Perfil', icon: faUser, screen: 'Profile'},
  ];

  const userLogout = async () => {
    await api.logout();
    navigation.reset({index: 1, routes: [{name: 'Login'}]});
  };

  const changeProperty = async () => {
    await AsyncStorage.removeItem('property');
    navigation.reset({
      index: 1,
      routes: [{name: 'Property'}],
    });
  };

  return (
    <DrawerArea>
      <LogoArea>
        <FooterInfo>
          <FooterProfile>{context.user.user.name}</FooterProfile>
          <FooterPropertyName>{context.user.property.name}</FooterPropertyName>
        </FooterInfo>
      </LogoArea>

      <ScrollArea>
        {menus.map((item, index) => (
          <MenuButton
            key={index}
            onPress={() => navigation.navigate(item.screen)}>
            <MenuSquare
              active={
                props.state.routes[props.state.index].name === item.screen
              }></MenuSquare>
            <FontAwesomeIcon
              icon={item.icon}
              size={20}
              color={
                props.state.routes[props.state.index].name === item.screen
                  ? '#8B63E7'
                  : '#666E78'
              }
            />
            <MenuButtonText
              active={
                props.state.routes[props.state.index].name === item.screen
              }>
              {item.title}
            </MenuButtonText>
          </MenuButton>
        ))}
      </ScrollArea>

      <PropertyArea>
        <ChangeProperty onPress={() => changeProperty()}>
          <ChangePropertyText>Trocar propriedade</ChangePropertyText>
        </ChangeProperty>
      </PropertyArea>

      <FooterArea>
        <FooterInfo>
          <FooterText>Gerenciar propriedades</FooterText>
        </FooterInfo>
        <FooterPropertyButton
          onPress={() => navigation.navigate('MyProperties')}>
          <FontAwesomeIcon icon={faCog} color="#8863E6" />
        </FooterPropertyButton>
      </FooterArea>
      <FooterLogout onPress={() => userLogout()}>
        <FooterLogoutText>SAIR</FooterLogoutText>
      </FooterLogout>
    </DrawerArea>
  );
};

const DrawerArea = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const LogoArea = styled.View`
  padding: 10px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
const Logo = styled.Image`
  width: 190px;
  height: 40px;
`;
const ScrollArea = styled.ScrollView`
  flex: 1;
  margin: 20px 0;
`;
const PropertyArea = styled.View`
  margin: 10px;
`;
const ChangeProperty = styled.TouchableOpacity`
  background-color: #8863e6;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
const ChangePropertyText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
const FooterArea = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const FooterInfo = styled.View``;
const FooterProfile = styled.Text`
  font-size: 15px;
  color: #000;
`;
const FooterText = styled.Text`
  font-size: 15px;
  color: #8863e6;
`;
const FooterPropertyName = styled.Text`
  font-size: 15px;
  color: #666e78;
`;
const FooterPropertyButton = styled.TouchableOpacity``;
const FooterLogout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const FooterLogoutText = styled.Text`
  color: #8863e6;
  font-size: 14px;
  font-weight: bold;
`;
const MenuButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-bottom: 5px;
    border-radius: 5px;
    align-items: center;
`;
const MenuSquare = styled.View`
    width: 5px;
    height: 35px;
    margin-right: 20px;
    background-color: ${props=>props.active ? '#8B63E7' : 'transparent'};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;
const MenuButtonText = styled.Text`
    font-size: 15px;
    margin-left: 10px;
    color: ${props=>props.active ? '#8B63E7' : '#666E78'};
`;
