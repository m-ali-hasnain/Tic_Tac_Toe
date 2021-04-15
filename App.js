import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button} from "react-native";
import Game from './tictactoe';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal visible={modalVisible} transparent={true} animationType='slide' onRequestClose={()=>{setModalVisible(false)}}>
        <View style={styles.container}><Game></Game></View>
          <Button title="Quit Game" onPress={()=>setModalVisible(false)}></Button>
      </Modal>
      <Text style={styles.text}>Tic Tac Toe</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Play Game</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor:  '#ff3333',
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "#FFFF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 10,
    textShadowColor: 'blue',
    marginBottom:20,
  },
});

export default App;