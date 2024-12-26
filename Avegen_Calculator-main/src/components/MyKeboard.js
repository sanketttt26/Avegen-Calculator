import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";
import { Styles } from "../styles/GlobalStyles";

export default function MyKeyboard({ input, setInput, setResult, handleInputReset, setIsCalculated }) {
  const handleNumberPress = (buttonValue) => {
    handleInputReset();
    setInput((prev) => prev + buttonValue);
  };

  const handleOperationPress = (buttonValue) => {
    handleInputReset();
    setInput((prev) => prev + " " + buttonValue + " ");
  };

  const clear = () => {
    setInput("");
    setResult("");
    setIsCalculated(false);
  };

  const calculate = () => {
    try {
      const calculatedResult = eval(input); // Avoid using eval in production
      if (calculatedResult === Infinity) {
        setResult("Infinity"); // Handle division by zero
      } else {
        setResult(calculatedResult.toString());
      }
      setIsCalculated(true);
    } catch {
      setResult("Error");
    }
  };

  return (
    <View style={styles.keyboard}>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
        <Button title="%" isGray onPress={() => handleOperationPress("%")} />
        <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleNumberPress("7")} />
        <Button title="8" onPress={() => handleNumberPress("8")} />
        <Button title="9" onPress={() => handleNumberPress("9")} />
        <Button title="×" isBlue onPress={() => handleOperationPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleNumberPress("4")} />
        <Button title="5" onPress={() => handleNumberPress("5")} />
        <Button title="6" onPress={() => handleNumberPress("6")} />
        <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleNumberPress("1")} />
        <Button title="2" onPress={() => handleNumberPress("2")} />
        <Button title="3" onPress={() => handleNumberPress("3")} />
        <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleNumberPress(".")} />
        <Button title="0" onPress={() => handleNumberPress("0")} />
        <Button title="⌫" onPress={() => setInput((prev) => prev.slice(0, -1))} />
        <Button title="=" isGreen onPress={calculate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keyboard: {
    padding: 10,
    backgroundColor: "#fff",
  },
});
