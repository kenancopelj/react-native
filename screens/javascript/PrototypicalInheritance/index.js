import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import screenStyles from "../../../styles/screen";

const code = `const animal = {
  speak() {
    return "Animal speaks"
  }
}

const dog = Object.create(animal)

dog.speak() // "Animal speaks"`;

export default function PrototypicalInheritance() {
  const [result, setResult] = useState(null);

  const run = () => {
    const animal = {
      speak() {
        return "Animal speaks";
      },
    };
    const dog = Object.create(animal);
    setResult(dog.speak());
  };

  return (
    <ScrollView
      style={screenStyles.container}
      contentContainerStyle={screenStyles.content}
    >
      <Text style={screenStyles.explanation}>
        JavaScript uses prototypical inheritance — objects inherit properties
        and methods from other objects via the prototype chain. Every object has
        a hidden <Text style={styles.mono}>[[Prototype]]</Text> link pointing to
        its parent.
      </Text>

      <View style={screenStyles.codeBlock}>
        <Text style={screenStyles.code}>{code}</Text>
      </View>

      <View style={screenStyles.linkRow}>
        <TouchableOpacity
          style={screenStyles.linkBtn}
          onPress={() =>
            Linking.openURL(
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain",
            )
          }
        >
          <Text style={screenStyles.linkBtnText}>Docs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={screenStyles.linkBtn}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=wstwjQ1yqWQ")
          }
        >
          <Text style={screenStyles.linkBtnText}>Video</Text>
        </TouchableOpacity>
      </View>

      <View style={screenStyles.demoCard}>
        <Text style={screenStyles.demoTitle}>Try it</Text>
        <TouchableOpacity style={screenStyles.runBtn} onPress={run}>
          <Text style={screenStyles.runBtnText}>Make dog speak</Text>
        </TouchableOpacity>
        {result !== null && (
          <View style={screenStyles.resultBox}>
            <Text style={screenStyles.resultText}>
              {'dog.speak() → "' + result + '"'}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mono: {
    fontFamily: "Courier",
    backgroundColor: "#eee",
    fontSize: 13,
  },
});
