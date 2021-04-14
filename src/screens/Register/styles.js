import { Platform } from 'react-native';
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
  Title: styled.Text`
    color: #000;
    font-size: 16px;
    align-self: center;
    margin-bottom: 8px;
  `,
  Description: styled.Text`
    color: #000;
    font-size: 12px;
    align-self: center;
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
    ${Platform.select({ ios: css`margin-bottom: 100px;`, android: css`margin-bottom: 20px;` })};
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
  Loading: styled.ActivityIndicator``,
};
