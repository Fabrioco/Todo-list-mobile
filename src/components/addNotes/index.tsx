import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { useNotesContext } from "@/src/contexts/notes";

export function AddNotes() {
  const { task, setTask, addTask, edited, setAllTasks, allTasks, setEdited } =
    useNotesContext();

  const handleAddTask = (task: string) => {
    if (!task) return;
    addTask(task);
    setTask("");
  };

  const handleEditTask = (task: string) => {
    if (!task) return;
    setEdited(false);
  };

  // const taskIndex = allTasks.findIndex((t) => t === task);
  // console.log(taskIndex)

  return (
    <View className="w-full flex flex-row items-center px-4 gap-4">
      <TextInput
        value={task}
        placeholder="Adicione uma nova tarefa"
        onChangeText={setTask}
        className="w-3/4 bg-gray-700 rounded-lg p-4 text-white placeholder:text-white"
      />
      <Pressable>
        {edited ? (
          <Text
            className="bg-white p-4 rounded-lg "
            onPress={() => handleEditTask(task)}
          >
            Editar
          </Text>
        ) : (
          <Text
            className="bg-white p-4 rounded-lg "
            onPress={() => handleAddTask(task)}
          >
            Adicionar
          </Text>
        )}
      </Pressable>
    </View>
  );
}
