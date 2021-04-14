import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { useState , Component } from 'react';
export default function App(){
  
  //Initalizing States
  const [turn,setTurn] = useState(1);
  const [board, setBoard] = useState([
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ]);


  //Function to handle touch
  const handleClick = (row, col) => {
    var my_grid = board;
    //write 1 or 2 on board at cell location where user taped
    my_grid[row][col] = turn == 1 ? 1 : 2;
    //updating turn
    let newTurn = turn == 1 ? 2 : 1;
    //update States
    setBoard(my_grid);
    setTurn(newTurn);
  };


  //function to render icon on board
  const renderIcon = (row, col) => {
    console.log("Rendering ICON");
      var value = board[row][col];
      if (value == 1) {
        return <Text style={styles.signX}>X</Text>;
      } else if (value == 2) {
        return <Text style={styles.signO}>O</Text>;
      } else {
        return <View />;
      }
    };
  

  //function to get winner of game
  const getWinner = () => {
    var grid = board;
    if (grid[0][0] + grid[1][1] + grid[2][2] == 3) {
      return 1;
    } else if (grid[0][0] + grid[1][1] + grid[2][2] == 6) {
      return 2;
    } else if (grid[2][0] + grid[1][1] + grid[1][2] == 3) {
      return 1;
    } else if (grid[2][0] + grid[1][1] + grid[1][2] == 6) {
      return 2;
    }
    else {
      return -1;
    }
  };
    return (
      
      <View style={styles.container}>
      {console.log("Component rendered")};
        <Text style={{ fontSize: 20, marginBottom: 20 }}>
          Turn Player: {turn}
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 20, color: 'red' }}>
          PLayer 1 Symbol: X
        </Text>
        {/* Row 1 */}

        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell, { borderLeftWidth: 0, borderTopWidth: 0 }]}
            onPress={() => {
              handleClick(0, 0);
              }}
              >
              {renderIcon(0,0)}
            </Pressable>
          
          <Pressable
            style={[styles.cell, { borderTopWidth: 0 }]}
            onPress={() => {
              handleClick(0, 1);
              
            }}>
           {renderIcon(0, 1)}
          </Pressable>

          <Pressable
            style={[styles.cell, { borderRightWidth: 0, borderTopWidth: 0 }]}
            onPress={() => {
             handleClick(0, 2);
             
            }}>
            {renderIcon(0, 2)}
          </Pressable>
        </View>

        {/* Row 2 */}
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell, { borderLeftWidth: 0 }]}
            onPress={() => {
             handleClick(1, 0);
             
            }}>
            {renderIcon(1, 0)}
          </Pressable>

          <Pressable
            style={[styles.cell]}
            onPress={() => {
             handleClick(1, 1);
             
            }}>
            {renderIcon(1, 1)}
          </Pressable>
          <Pressable
            style={[styles.cell, { borderRightWidth: 0 }]}
            onPress={() => {
              handleClick(1, 2);
              
            }}>
            {renderIcon(1, 2)}
          </Pressable>
        </View>

        {/* Row 3 */}

        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={[styles.cell, { borderLeftWidth: 0, borderBottomWidth: 0 }]}
            onPress={() => {
             handleClick(2, 0);
             
            }}>
            {renderIcon(2, 0)}
          </Pressable>

          <Pressable
            style={[styles.cell, { borderBottomWidth: 0 }]}
            onPress={() => {
              handleClick(2, 1);
              
            }}>
            {renderIcon(2, 1)}
          </Pressable>

          <Pressable
            style={[styles.cell, { borderRightWidth: 0, borderBottomWidth: 0 }]}
            onPress={() => {
              handleClick(2, 2);
              
            }}>
            {renderIcon(2, 2)}
          </Pressable>
        </View>
        <Text style={{ fontSize: 16, marginTop: 20, color: 'orange' }}>
          PLayer 2 Symbol: O
        </Text>
      </View>
    );
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
