import {
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBg, setrandomBg] = useState<string>('#ffffff');
  const generateBg = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    setrandomBg(color);
  };
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.mainContainer, {backgroundColor: randomBg}]}>
        <TouchableOpacity style={styles.actionBtn} onPress={generateBg}>
          <Text style={styles.actionBtnTxt}>PRESS ME!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
  },
});
