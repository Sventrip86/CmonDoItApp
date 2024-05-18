import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';
import HomeStackNavigator from './HomeStackNavigator';


const Tab = createBottomTabNavigator()

const AppTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="List" component={ListScreen} />

        </Tab.Navigator>
    )
}

export default AppTabNavigator