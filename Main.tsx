import { View, StyleSheet, Text } from "react-native";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { counterSelect } from "./counterSlice";

const Main: React.FC = () => {
  const count = useSelector(counterSelect);
  return (
    <View>
      <Text>c{count.value}</Text>
    </View>
  );
};

export default Main;
