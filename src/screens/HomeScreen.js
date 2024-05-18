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

  



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Buongiorno Fabs</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Morning")}>
            <Text variant="headlineSmall">
              Morning check... qui lo screen dove vengono chieste cose come: hai
              dormito bene?, come stai adesso, colazione?
            </Text>
          </TouchableOpacity>
        </View>
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
