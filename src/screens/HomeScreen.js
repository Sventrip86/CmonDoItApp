import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  TextInput,
  Text,
  Button,
  Snackbar,
  
  SegmentedButtons,
  IconButton,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useToDoList } from "../contexts/ToDoListContext";


const HomeScreen = () => {
  const navigation = useNavigation();
  const {toDoList, setToDoList} = useToDoList();

  const [toDo, setToDo] = useState("");
  const [priority, setPriority] = useState(null);
  const [openSnack, setOpenSnack] = useState(false);

  const handleOpenSnack = () => {
    setOpenSnack(true);
    setTimeout(() => {
      setOpenSnack(false);
    }, 2000);
  };

  const handleCreate = () => {
    if(priority === null) setPriority('normal')
    const newItem = {
        id: Date.now().toString(),
        description: toDo,
        priority: priority || 'normal'
    }
    console.log(newItem)
    setToDoList([...toDoList,newItem]);
    setToDo("");
    setPriority(null)
    handleOpenSnack();
  };

  
//  function to get the current time 
const getCurrentTime = () => {
  const hours = new Date().getHours();
  if (hours < 12) {
    return 'morning';
  } else if (hours < 18 ) {
    return 'afternoon';
  } else if(hours < 22 ) {
    return 'evening';
  } else return 'night'
}

const displayTime = () => {
  return (
    `${hours} : ${minutes}`
  )
}

const time = getCurrentTime()

const hours = new Date().getHours();
const minutes = new Date().getMinutes();

const renderCardTimeBased = () => {
  switch (time) {
    case 'morning':
      return <MorningCard/>
    case 'afternoon':
      return null
    case 'evening':
      return <EveningCard/>  
    case 'night':
      return null  
    default:
      break;
  }
}

const MorningCard = () => {
  return (
    <View style={styles.innerContainer}>
    <TouchableOpacity onPress={() => navigation.navigate("Morning")}>
      <Text variant="headlineSmall">
      Good {getCurrentTime()} Fabs! its <Text style={{fontSize: 30}}>{displayTime()} </Text></Text>
    </TouchableOpacity>
  </View>
  )
}

const EveningCard = () => {
  return (
    <View style={styles.innerContainer}>
    <TouchableOpacity onPress={() => navigation.navigate("Morning")}>   
      <Text variant="headlineSmall">
        Good {getCurrentTime()} Fabs! its  <Text style={{fontSize: 30}}>{displayTime()} </Text>
      </Text>
    </TouchableOpacity>
  </View>
  )
}


  return (
    <SafeAreaView style={styles.container}>
     
      <ScrollView style={styles.scrollView}>
       
       {/* time based card  */}
      {renderCardTimeBased()}

        <View style={styles.innerContainer}>
          <Text>Cose da fare</Text>
          <TextInput
            mode="outlined"
            label="TO DO"
            placeholder=""
            value={toDo}
            right={<TextInput.Icon icon="pencil" />}
            onChangeText={setToDo}
          />
          <SegmentedButtons
            style={styles.prioButtons}
            value={priority}
            showSelectedCheck="true"
            onValueChange={setPriority}
            buttons={[
              {
                value: "low",
                label: "LOW",
                checkedColor: 'green'
              },
              {
                value: "normal",
                label: "NORMAL",

              },
              {
                value: "high",
                label: "HIGH",
                checkedColor: 'red'

              },
            ]}
          ></SegmentedButtons>
          <IconButton
            icon="arrow-down"
            iconColor='black'
            size={40}
            onPress={() => console.log('Pressed')} 
            />   
          <Button
            mode="contained"
            style={styles.createButton}
            onPress={handleCreate}
          >
            Crea
          </Button>
        </View>
       
      </ScrollView>
      <Snackbar visible={openSnack} style={{ backgroundColor: "green" }}>
        To Do creata!
      </Snackbar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  innerContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 40,
  },
  createButton: {
    marginTop: 20,
  },
  
  prioButtons: {
    marginTop: 10,
  },
});

export default HomeScreen;
