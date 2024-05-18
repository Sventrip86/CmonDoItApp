import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  AppTabNavigator  from './src/navigation/AppTabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { ToDoListProvider } from './src/contexts/ToDoListContext'


export default function App() {
  return (
    <ToDoListProvider>

    <NavigationContainer>
   <AppTabNavigator/>


    </NavigationContainer>
    </ToDoListProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
