import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

export function AddNotes() {
  return (
    <View className="flex-1 w-full flex flex-col items-center">
      <View className="w-3/4 flex flex-row items-center justify-between">
        <Text className="text-white text-6xl">Anotações</Text>
        <Feather
          name="plus-square"
          size={42}
          color="white"
          onPress={() => alert("ta clicado")}
          className="rounded "
        />
      </View>
    </View>
  );
}
