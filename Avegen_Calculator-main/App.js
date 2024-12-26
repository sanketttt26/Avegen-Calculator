import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import { myColors } from "./src/styles/Colors";
import { ThemeContext } from "./src/styles/Theme";
import MyKeyboard from "./src/components/MyKeboard";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [input, setInput] = useState(""); // Input state
  const [result, setResult] = useState(""); // Result state
  const [isCalculated, setIsCalculated] = useState(false); // Track if result was calculated

  const handleInputReset = () => {
    if (isCalculated) {
      setInput(result);
      setResult("");
      setIsCalculated(false);
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={[
          theme === "light"
            ? styles.container
            : [styles.container, { backgroundColor: "black" }],
        ]}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.switchContainer}>
            <Text
              style={[
                styles.switchText,
                theme === "dark" && { color: "white" },
              ]}
            >
              {theme === "light" ? "Light Mode" : "Dark Mode"}
            </Text>
            <Switch
              value={theme === "dark"}
              onValueChange={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
            />
          </View>
        </View>

        {/* Calculator Box */}
        <View style={styles.calculatorBox}>
          {/* Display Section */}
          <View style={styles.display}>
            <Text
              style={[
                styles.result,
                input.length > 12
                  ? { fontSize: 36 - (input.length - 12) * 2 }
                  : {}, // Shrink font for long inputs
              ]}
              numberOfLines={1} // Prevent text overflow
              adjustsFontSizeToFit // Automatically adjust font size
              minimumFontScale={0.5} // Minimum scale to shrink text
              ellipsizeMode="head" // Truncate from the start if text overflows
            >
              {result || input || "0"}
            </Text>
          </View>
          {/* Keyboard Section */}
          <MyKeyboard
            input={input}
            setInput={(value) => setInput(value)}
            setResult={(value) => setResult(value)}
            handleInputReset={handleInputReset}
            setIsCalculated={setIsCalculated}
          />
        </View>

        {/* Footer Section */}
        <View
          style={[
            styles.footer,
            theme === "dark" && { backgroundColor: "black" }, // Set black background in dark mode
          ]}
        >
          <Text
            style={[
              styles.footerText,
              theme === "dark" ? { color: "white" } : { color: "black" }, // Adjust text color for visibility
            ]}
          >
            Calculator made by Sanket Pawar
          </Text>
        </View>
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "center", // Center the calculator
    paddingBottom: 20, // Margin from the bottom
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  switchText: {
    fontSize: 16,
    marginRight: 10,
    color: "black",
  },
  calculatorBox: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: myColors.white,
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  display: {
    width: "100%",
    height: 100,
    backgroundColor: myColors.light,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 16,
    marginBottom: 16,
  },
  result: {
    color: myColors.black,
    fontSize: 36, // Default font size
  },
  footer: {
    width: "100%",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: myColors.grey,
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
