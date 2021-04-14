import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Component } from 'react';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turn:1,
      board:[
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
    };
  }  
//Function to handle touch 
handleClick = (row, col) => {
    var my_grid = this.state.board;
    my_grid[row][col] = this.state.turn == 1 ? 1 : 2;
    var newTurn = (this.state.turn) == 1 ? 2 : 1;
    this.setState({ board: my_grid, turn:newTurn});
  };

//function to render icon
renderIcon = (row, col) => {
  var value = this.state.board[row][col];
  if(value==1){
    return <Text style={styles.signX}>X</Text>
  }
  else if(value==2){
    return <Text style={styles.signO}>O</Text>
  }
  else{
    return <View/>
  }

};
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:20,marginBottom:20}}>Turn Player: {this.state.turn}</Text>
        <Text style={{fontSize:16,marginBottom:20, color:'red'}}>PLayer 1 Symbol: X</Text>
        {/* Row 1 */}
        
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell, { borderLeftWidth: 0, borderTopWidth: 0 }]}
            onPress = {()=>{this.handleClick(0,0)}}
            >
            {this.renderIcon(0,0)}
          </Pressable>

          <Pressable style={[styles.cell, { borderTopWidth: 0 }]}
           onPress = {()=>{this.handleClick(0,1)}}>
          {this.renderIcon(0,1)}
          </Pressable>

          <Pressable
            style={[styles.cell, { borderRightWidth: 0, borderTopWidth: 0 }]}onPress = {()=>{this.handleClick(0,2)}}>
            {this.renderIcon(0,2)}
          </Pressable>

        </View>

        {/* Row 2 */}
        <View style={{ flexDirection: 'row' }}>  
          <Pressable style={[styles.cell, { borderLeftWidth: 0 }]} onPress = {()=>{this.handleClick(1,0)}}>    
          {this.renderIcon(1,0)}
          </Pressable>
          
          <Pressable style={[styles.cell]} onPress = {()=>{this.handleClick(1,1)}}>
            {this.renderIcon(1,1)}
          </Pressable>
          <Pressable style={[styles.cell, { borderRightWidth: 0 }]} onPress = {()=>{this.handleClick(1,2)}}>
            {this.renderIcon(1,2)}
          </Pressable>
        </View>

        {/* Row 3 */}
        
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
            onPress = {()=>{this.handleClick(2,0)}}
            >
            {this.renderIcon(2,0)}
          </Pressable>

          <Pressable style={[styles.cell, { borderBottomWidth: 0 }]}
           onPress = {()=>{this.handleClick(2,1)}}>
          {this.renderIcon(2,1)}
          </Pressable>

          <Pressable
            style={[styles.cell, { borderRightWidth: 0, borderBottomWidth: 0 }]}onPress = {()=>{this.handleClick(2,2)}}>
            {this.renderIcon(2,2)}
          </Pressable>

        </View>
         <Text style={{fontSize:16,marginTop:20, color:'orange'}}>PLayer 2 Symbol: O</Text>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  cell: {
    borderWidth: 3,
    borderColor: 'green',
    width: 100,
    height: 100,
    color: 'black',
  },
  signX: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    color: 'red',
    padding: 20,
  },
  signO: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 60,
    padding: 20,
    color: 'orange',
  },
});
