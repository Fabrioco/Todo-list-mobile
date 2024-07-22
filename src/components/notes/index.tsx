import { View, Text, Pressable } from "react-native";
import React from "react";
import { useNotesContext } from "@/src/contexts/notes";
import { Ionicons } from "@expo/vector-icons";

export default function Notes() {
  const { allTasks, removeTask, setEdited, editTask } = useNotesContext();

  const handleRemoveTask = (task: string) => {
    removeTask(task);
  };

  const handleEdited = (task: string) => {
    setEdited(true);
    editTask(task);
  };

  return (
    <View className="p-6 flex justify-center items-center">
      <View className="w-4/5 flex flex-col justify-center items-center">
        {allTasks.map((task, index) => (
          <View
            key={index}
            className="w-full min-h-10 flex flex-row items-center justify-between border border-gray-500 rounded-lg p-4 my-2"
          >
            <Text className="text-white inline w-4/5">{task}</Text>
            <View className="flex flex-row gap-2">
              <Pressable onPress={() => handleEdited(task)}>
                <Ionicons name="pencil" size={24} color="white" />
              </Pressable>
              <Pressable onPress={() => handleRemoveTask(task)}>
                <Ionicons name="trash-outline" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
