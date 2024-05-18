import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MorningHomeScreen from '../screens/MorningHomeScreen';



const HomeStack = createNativeStackNavigator()


const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Dashboard" component={HomeScreen} options={{ headerShown: false }}/>
            <HomeStack.Screen name="Morning" component={MorningHomeScreen} />

        </HomeStack.Navigator>
    )
}


export default HomeStackNavigator