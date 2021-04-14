import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer'
import NoticeBoard from '../screens/NoticeBoard';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="NoticeBoard"
        component={NoticeBoard}
      />
    </Drawer.Navigator>
  );
}