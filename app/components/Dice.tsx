import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const diceface = [
  {
    id: 1,
    image: require("../assets/images/DiceAssets/dice1.png")
  },
  {
    id: 2,
    image: require("../assets/images/DiceAssets/dice2.png")
  },
  {
    id: 3,
    image: require("../assets/images/DiceAssets/dice3.png")
  },
  {
    id: 4,
    image: require("../assets/images/DiceAssets/dice4.png")
  },
  {
    id: 5,
    image: require("../assets/images/DiceAssets/dice5.png")
  },
  {
    id: 6,
    image: require("../assets/images/DiceAssets/dice6.png")
  },
  {
    id: 7,
    image: require("../assets/images/DiceAssets/dice1.png")
  },

]
export default function Dice() {
  const [dice, setDice] = useState();
  // const [rerolls, setrerolls] = useState(3);
  // const [lockedIn, setlockedIn] = useState(true);
  // function = onPress={() => setDice(99)}
  return (
    <TouchableOpacity
      // onPress={() => setDice(99)}
      onPress={() => setDice(Math.floor(Math.random() * 6) + 1)}
    >
      <View style={styles.container}>
        <Text style={styles.diceText}>{dice}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
    backgroundColor: 'orange'
  },
  diceText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
});
