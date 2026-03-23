import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  explanation: {
    fontSize: 15,
    lineHeight: 24,
    color: "#333",
    marginBottom: 20,
  },
  codeBlock: {
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
  },
  code: {
    fontFamily: "Courier",
    fontSize: 13,
    color: "#d4d4d4",
    lineHeight: 22,
  },
  linkRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  linkBtn: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  linkBtnText: {
    color: "#007AFF",
    fontWeight: "600",
    fontSize: 14,
  },
  demoCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  demoTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#1a1a1a",
  },
  runBtn: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  runBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  resultBox: {
    backgroundColor: "#f0f8ff",
    borderRadius: 8,
    padding: 14,
    marginTop: 14,
    borderLeftWidth: 3,
    borderLeftColor: "#007AFF",
    gap: 4,
  },
  resultText: {
    fontFamily: "Courier",
    fontSize: 14,
    color: "#1a1a1a",
    fontWeight: "600",
  },
});
