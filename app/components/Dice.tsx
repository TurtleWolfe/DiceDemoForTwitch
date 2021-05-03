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
  const [dice, setDice] = useState(diceface);

  // function = onPress={() => console.log("rolled dice",)}

  return (
    <TouchableOpacity
    //  onPress={onPress}
    >
      <Text style={styles.dice}>Dice</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  dice: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'blue',
  },
})
