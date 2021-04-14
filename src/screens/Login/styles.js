import styled, {css} from 'styled-components/native';

export default {
  Avoiding: styled.KeyboardAvoidingView`
    flex: 1;
    padding: 25px;
    background-color: #f5f6fa;
    justify-content: center;
  `,
  Keyboard: styled.TouchableWithoutFeedback``,
  Container: styled.View``,
  Logo: styled.Image`
    width: 250px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
  `,
  Field: styled.TextInput`
    border-width: 1px;
    border-color: #ccc;
    background-color: #fff;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    height: 44px;
    padding: 10px;
    margin-bottom: 15px;
  `,
  ButtonArea: styled.TouchableOpacity`
    background-color: #8863e6;
    margin-bottom: 10px;
    height: 44px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
  `,
  ButtonText: styled.Text`
    font-size: 15px;
    color: #fff;
    font-weight: bold;
  `,
  ButtonLink: styled.TouchableOpacity``,
  Link: styled.Text`
    align-self: center;
    font-size: 14px;
    color: #8863e6;
  `,
  Loading: styled.ActivityIndicator``,
};
