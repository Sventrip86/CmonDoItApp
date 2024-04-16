import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';


const Tab = createBottomTabNavigator()

const AppTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="List" component={ListScreen} />

        </Tab.Navigator>
    )
}

export default AppTabNavigator