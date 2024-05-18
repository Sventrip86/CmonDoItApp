import { View,  StyleSheet, SafeAreaView } from 'react-native'
import { Text, SegmentedButtons  } from 'react-native-paper'
import React, {useState} from 'react'

const MorningHomeScreen = () => {

    const [ value, setValue ] = useState('')





  return (
    <SafeAreaView style={styles.container}>
        <Text>
      Come hai dormito?</Text>

      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
            {
                value: 'male',
                label: 'Male'
            },
            {
                value: 'bene',
                label: 'Bene'
            }
        ]}
        />
        


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        margin: 10
      },
})

export default MorningHomeScreen