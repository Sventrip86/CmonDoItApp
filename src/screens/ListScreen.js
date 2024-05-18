import React, {useState} from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { IconButton } from 'react-native-paper';
import { useToDoList } from "../contexts/ToDoListContext";



const renderItem = ({ item }) => {

    let textColor = {}

    if (item.priority === 'low') textColor = { color : 'green'}
    if (item.priority === 'high') textColor = { color : 'red'}

        return(
    
            <View style={styles.listItemContainer}>
              <Text style={textColor}>{item.description}</Text>
              <IconButton icon="delete" mode="contained" />
            </View>
          )

    }

const ListScreen = () => {

    const { toDoList } = useToDoList();

    console.log(toDoList); 
    return (
        <View style={styles.container}>

<View style={styles.listContainer}>
          <FlatList
            data={toDoList}
            
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            
          />
        </View>

        </View>
       
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
      },
    listContainer: {
        marginTop: 20,
      },
      listItem: {
        padding: 10,
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 10,
        marginTop: 10,
      },
      listItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
      },
})

export default ListScreen