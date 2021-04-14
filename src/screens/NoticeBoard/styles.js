import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: #F5F6FA;
  `,
  Scroll: styled.ScrollView`
    flex: 1;
    padding: 25px;
  `,
  Loading: styled.ActivityIndicator``,
  Title: styled.Text`
    font-size: 16px;
    color: #000;
    margin-top: 10px;
    margin-bottom: 16px;
    align-self: center;
  `,
  Description: styled.Text`
    color: #000;
    font-size: 12px;
    align-self: center;
    margin-bottom: 25px;
  `,
  Area: styled.View`
    margin: 50px 0;
    align-items: center;
  `,
  List: styled.View`
    margin: 20px 0;
  `,
  ButtonList: styled.TouchableOpacity`
    background-color: #fff;
    border-width: 1px;
    border-color: #E8E9ED;
    border-radius: 5px;
    padding: 15px;
    align-items: center;
    margin-bottom: 10px;
  `,
  ButtonListName: styled.Text`
    color: #000;
    font-size: 14px;
    font-weight: bold;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #8863e6;
    height: 44px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
  `,
  Button: styled.Text`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  `,
}