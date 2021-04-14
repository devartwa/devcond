import React, {useState, useEffect} from 'react';
import NoticeBoard from './styles';
import {useNavigation} from '@react-navigation/native';
import {useStateValue} from '../../contexts/StateContext';

export default () => {
  const navigation = useNavigation();
  const [context, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  return (
    <NoticeBoard.Container>
      <NoticeBoard.Scroll>
        {loading && <NoticeBoard.Loading color="#8863E6" size="small" />}
      </NoticeBoard.Scroll>
    </NoticeBoard.Container>
  );
};
