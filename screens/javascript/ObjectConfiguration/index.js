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

const code = `const obj = {}

Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false,
})`;

const obj = {};
Object.defineProperty(obj, "name", {
  value: "John",
  writable: false,
  enumerable: true,
  configurable: false,
});

export default function ObjectConfiguration() {
  const [modifyResult, setModifyResult] = useState(null);
  const [keysResult, setKeysResult] = useState(null);
  const [deleteResult, setDeleteResult] = useState(null);

  const tryModify = () => {
    const before = obj.name;
    try {
      obj.name = "Mike";
    } catch {}
    setModifyResult({ before, after: obj.name });
  };

  const listKeys = () => {
    setKeysResult(Object.keys(obj));
  };

  const tryDelete = () => {
    const deleted = delete obj.name;
    setDeleteResult({ deleted, stillExists: obj.name });
  };

  return (
    <ScrollView
      style={screenStyles.container}
      contentContainerStyle={screenStyles.content}
    >
      <Text style={screenStyles.explanation}>
        Object properties can be configured using descriptors:{" "}
        <Text style={styles.mono}>writable</Text>,{" "}
        <Text style={styles.mono}>enumerable</Text>, and{" "}
        <Text style={styles.mono}>configurable</Text>. Use{" "}
        <Text style={styles.mono}>Object.defineProperty</Text> to set them.
      </Text>

      <View style={screenStyles.codeBlock}>
        <Text style={screenStyles.code}>{code}</Text>
      </View>

      <View style={screenStyles.linkRow}>
        <TouchableOpacity
          style={screenStyles.linkBtn}
          onPress={() =>
            Linking.openURL(
              "https://medium.com/@shrijan00003/javascript-object-properties-writable-enumerable-configurable-eced27378256",
            )
          }
        >
          <Text style={screenStyles.linkBtnText}>Docs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={screenStyles.linkBtn}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/watch?v=LD1tQEWsjz4")
          }
        >
          <Text style={screenStyles.linkBtnText}>Video</Text>
        </TouchableOpacity>
      </View>

      <View style={screenStyles.demoCard}>
        <Text style={screenStyles.demoTitle}>
          Try modifying (writable: false)
        </Text>
        <TouchableOpacity style={screenStyles.runBtn} onPress={tryModify}>
          <Text style={screenStyles.runBtnText}>obj.name = "Mike"</Text>
        </TouchableOpacity>
        {modifyResult && (
          <View style={screenStyles.resultBox}>
            <Text style={screenStyles.resultText}>
              before: "{modifyResult.before}"
            </Text>
            <Text style={screenStyles.resultText}>
              after: "{modifyResult.after}" ← unchanged
            </Text>
          </View>
        )}
      </View>

      <View style={screenStyles.demoCard}>
        <Text style={screenStyles.demoTitle}>List keys (enumerable: true)</Text>
        <TouchableOpacity style={screenStyles.runBtn} onPress={listKeys}>
          <Text style={screenStyles.runBtnText}>Object.keys(obj)</Text>
        </TouchableOpacity>
        {keysResult && (
          <View style={screenStyles.resultBox}>
            <Text style={screenStyles.resultText}>
              [{keysResult.map((k) => `"${k}"`).join(", ")}]
            </Text>
          </View>
        )}
      </View>

      <View style={screenStyles.demoCard}>
        <Text style={screenStyles.demoTitle}>
          Delete property (configurable: false)
        </Text>
        <TouchableOpacity
          style={[screenStyles.runBtn, styles.runBtnRed]}
          onPress={tryDelete}
        >
          <Text style={screenStyles.runBtnText}>delete obj.name</Text>
        </TouchableOpacity>
        {deleteResult && (
          <View style={[screenStyles.resultBox, styles.resultBoxRed]}>
            <Text style={screenStyles.resultText}>
              delete returned: {String(deleteResult.deleted)}
            </Text>
            <Text style={screenStyles.resultText}>
              obj.name still: "{deleteResult.stillExists}"
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
  runBtnRed: {
    backgroundColor: "#FF3B30",
  },
  resultBoxRed: {
    backgroundColor: "#fff5f5",
    borderLeftColor: "#FF3B30",
  },
});
