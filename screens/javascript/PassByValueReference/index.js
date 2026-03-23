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

const primitiveCode = `let a = 10
let b = a   // copy of the value
b = 20
// a is still 10`;

const objectCode = `let obj1 = { name: "John" }
let obj2 = obj1   // copy of the reference
obj2.name = "Mike"
// obj1.name is now "Mike"`;

export default function PassByValueReference() {
  const [primitiveResult, setPrimitiveResult] = useState(null);
  const [objectResult, setObjectResult] = useState(null);

  const runPrimitive = () => {
    let a = 10;
    let b = a;
    b = 20;
    setPrimitiveResult({ a, b });
  };

  const runObject = () => {
    let obj1 = { name: "John" };
    let obj2 = obj1;
    obj2.name = "Mike";
    setObjectResult({ obj1: obj1.name, obj2: obj2.name });
  };

  return (
    <ScrollView
      style={screenStyles.container}
      contentContainerStyle={screenStyles.content}
    >
      <Text style={screenStyles.explanation}>
        Primitives (numbers, strings, booleans) are passed{" "}
        <Text style={styles.bold}>by value</Text> — a copy is made. Objects and
        arrays are passed <Text style={styles.bold}>by reference</Text> — both
        variables point to the same memory location.
      </Text>

      <View style={screenStyles.linkRow}>
        <TouchableOpacity
          style={screenStyles.linkBtn}
          onPress={() =>
            Linking.openURL(
              "https://dev-aditya.medium.com/pass-by-value-and-pass-by-reference-in-javascript-7b4b3d59f629",
            )
          }
        >
          <Text style={screenStyles.linkBtnText}>Docs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={screenStyles.linkBtn}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=-hBJz2PPIVE")
          }
        >
          <Text style={screenStyles.linkBtnText}>Video</Text>
        </TouchableOpacity>
      </View>

      <View style={screenStyles.demoCard}>
        <Text style={screenStyles.demoTitle}>Primitives — Pass by Value</Text>
        <View style={screenStyles.codeBlock}>
          <Text style={screenStyles.code}>{primitiveCode}</Text>
        </View>
        <TouchableOpacity style={screenStyles.runBtn} onPress={runPrimitive}>
          <Text style={screenStyles.runBtnText}>Run</Text>
        </TouchableOpacity>
        {primitiveResult && (
          <View style={screenStyles.resultBox}>
            <Text style={screenStyles.resultText}>
              a = {primitiveResult.a} ← unchanged
            </Text>
            <Text style={screenStyles.resultText}>b = {primitiveResult.b}</Text>
          </View>
        )}
      </View>

      <View style={screenStyles.demoCard}>
        <Text style={screenStyles.demoTitle}>Objects — Pass by Reference</Text>
        <View style={screenStyles.codeBlock}>
          <Text style={screenStyles.code}>{OBJECT_CODE}</Text>
        </View>
        <TouchableOpacity
          style={[screenStyles.runBtn, styles.runBtnRed]}
          onPress={runObject}
        >
          <Text style={screenStyles.runBtnText}>Run</Text>
        </TouchableOpacity>
        {objectResult && (
          <View style={[screenStyles.resultBox, styles.resultBoxRed]}>
            <Text style={screenStyles.resultText}>
              obj1.name = "{objectResult.obj1}" ← changed!
            </Text>
            <Text style={screenStyles.resultText}>
              obj2.name = "{objectResult.obj2}"
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "700",
    color: "#1a1a1a",
  },
  runBtnRed: {
    backgroundColor: "#FF3B30",
  },
  resultBoxRed: {
    backgroundColor: "#fff5f5",
    borderLeftColor: "#FF3B30",
  },
});
