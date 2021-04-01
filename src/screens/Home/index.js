
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../components/Home/index';
import InviteListScreen from '../../screens/Home/InviteListScreen/index';
import NewConnectionListScreen from '../../screens/Home/NewConnectionList/index';
import LearnMoreServiceComponent from '../../screens/Home/LearnMore/index';
import CustomSidebarMenu from '../../components/Home/customSideMenu/index'



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreenStack({ navigation }) {

    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
            header: () => null,
        }}>

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="InviteListScreen" component={InviteListScreen} />
            <Stack.Screen name="NewConnectionListScreen" component={NewConnectionListScreen} />
            <Stack.Screen name="LearnMoreServiceComponent" component={LearnMoreServiceComponent} />

        </Stack.Navigator>
    );
}


const Home = () => {

    return (

        <Drawer.Navigator

            drawerContent={(props) => <CustomSidebarMenu
                navigation={props.navigation} />}
        >


            <Drawer.Screen
                name="HomeScreenStack"
                component={HomeScreenStack}
            />
            <Drawer.Screen
                name="InviteListScreen"
                component={InviteListScreen}
            />
            <Drawer.Screen
                name="NewConnectionListScreen"
                component={NewConnectionListScreen}
            />
            <Drawer.Screen
                name="LearnMoreServiceComponent"
                component={LearnMoreServiceComponent}
            />


        </Drawer.Navigator>

    );
}


export default Home;