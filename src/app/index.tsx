import { Pressable, Text, View, TextInput } from "react-native";
import "../styles/main.css";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [task, setTask] = React.useState<string>("");
  const [indexOldTask, setIndexOldTask] = React.useState<number>(0);
  const [list, setList] = React.useState<string[]>([]);
  const [disabled, setDisabled] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const tasks = await AsyncStorage.getItem("@tasks");
      if (tasks) {
        setList(JSON.parse(tasks));
      }
    })();
  }, []);

  const handleAddTask = async (task: string) => {
    if (!task) return;
    setList((tasks) => [...tasks, task]);
    const listJson = JSON.stringify(list);
    await AsyncStorage.setItem("@tasks", listJson);
    setTask("");
  };

  const handleEdit = (index: number, task: string) => {
    setDisabled(true);
    setTask(task);
    setIndexOldTask(index);
  };

  const editTask = (newTask: string) => {
    const newItems = [...list];
    newItems[indexOldTask] = newTask;
    setList(newItems);
    const listJson = JSON.stringify(newItems);
    AsyncStorage.setItem("@tasks", listJson);
    setDisabled(false);
    setTask("");
  };

  const handleRemoveTask = (task: string) => {
    setList((tasks) => tasks.filter((t) => t !== task));
    const listJson = JSON.stringify(list);
    AsyncStorage.setItem("@tasks", listJson);
  };

  return (
    <View className="flex-1 flex flex-col bg-gray-900 w-full ">
      <View className="w-full flex flex-row items-center px-4 gap-4 pt-10">
        <TextInput
          value={task}
          placeholder="Adicione uma nova tarefa"
          onChangeText={setTask}
          className="w-3/4 bg-gray-700 rounded-lg p-4 text-white placeholder:text-white"
        />
        <Pressable
          onPress={disabled ? () => editTask(task) : () => handleAddTask(task)}
        >
          {disabled ? (
            <Text className="bg-white p-4 rounded-lg ">Editar</Text>
          ) : (
            <Text className="bg-white p-4 rounded-lg ">Adicionar</Text>
          )}
        </Pressable>
      </View>
      <View className="p-6 flex justify-center items-center">
        <View className="w-4/5 flex flex-col justify-center items-center">
          {list.map((task, index) => (
            <View
              key={index}
              className="w-full min-h-10 flex flex-row items-center justify-between border border-gray-500 rounded-lg p-4 my-2"
            >
              <Text className="text-white inline w-4/5">{task}</Text>
              <View className="flex flex-row gap-2">
                <Pressable
                  accessibilityLabel="Editar tarefa"
                  onPress={() => handleEdit(index, task)}
                >
                  <Ionicons name="pencil" size={24} color="white" />
                </Pressable>
                <Pressable
                  accessibilityLabel="Remover tarefa"
                  onPress={() => handleRemoveTask(task)}
                >
                  <Ionicons name="trash-outline" size={24} color="white" />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
