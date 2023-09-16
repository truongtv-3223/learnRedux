import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import Main from "./Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
