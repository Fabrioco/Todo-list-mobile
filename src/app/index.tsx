import { View } from "react-native";
import { Header } from "../components/header";
import { AddNotes } from "../components/addNotes";
import "../styles/main.css";
import { NotesProvider } from "../contexts/notes";
import Notes from "../components/notes";

export default function Index() {
  return (
    <NotesProvider>
      <View className="flex-1 flex flex-col bg-gray-900 w-full">
        <Header />
        <AddNotes />
        <Notes />
      </View>
    </NotesProvider>
  );
}
