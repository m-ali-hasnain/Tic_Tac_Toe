import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Row 1 */}
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.cell, { borderLeftWidth: 0, borderTopWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>0,0</Text>
          </Pressable>
        </View>
        <View style={[styles.cell, { borderTopWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>0,1</Text>
          </Pressable>
        </View>
        <View style={[styles.cell, { borderRightWidth: 0, borderTopWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>0,2</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 2 */}
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.cell, { borderLeftWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>1,0</Text>
          </Pressable>
        </View>
        <View style={[styles.cell]}>
          <Pressable>
            <Text style={styles.cellComponent}>1,1</Text>
          </Pressable>
        </View>
        <View style={[styles.cell, { borderRightWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>1,2</Text>
          </Pressable>
        </View>
      </View>
      {/* Row 3 */}
      <View style={{ flexDirection: 'row' }}>
        <View
          style={[styles.cell, { borderLeftWidth: 0, borderBottomWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>2,0</Text>
          </Pressable>
        </View>
        <View style={[styles.cell, { borderBottomWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>2,1</Text>
          </Pressable>
        </View>
        <View
          style={[styles.cell, { borderRightWidth: 0, borderBottomWidth: 0 }]}>
          <Pressable>
            <Text style={styles.cellComponent}>2,2</Text>
          </Pressable>
        </View>
      </View>
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
  cellComponent: {
    flex: 1,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
