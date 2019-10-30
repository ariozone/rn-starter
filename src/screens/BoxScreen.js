import React from "react"
import { View, StyleSheet, Text } from "react-native"

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 5,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
    alignItems: "center"
  },
  textStyle: {
    borderWidth: 5,
    borderColor: "red"
  }
})
export default BoxScreen
