import { Text, View } from "react-native";
import { Header } from "../components/header";
import { AddNotes } from "../components/addNotes";
import "../styles/main.css";

export default function Index() {
  return (
    <View className="flex-1 flex flex-col bg-gray-800">
      <Header />
      <AddNotes />
    </View>
  );
}
