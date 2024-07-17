import { View, Text, Image } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export function Header() {
  return (
    <View
      className="h-14 w-full flex flex-row items-center justify-around"
      style={{ marginTop: statusBarHeight }}
    >
      <View className="flex flex-row items-center gap-4">
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-6 h-6 rounded-full"
        />
        <Text className="text-white">Bem vindo de volta, Fabricio</Text>
      </View>
      <View className="flex flex-row items-center justify-center gap-3">
        <Feather
          name="search"
          size={24}
          color="white"
          onPress={() => alert("ta clicado")}
        />
        <Ionicons name="notifications-outline" size={24} color="white" />
      </View>
    </View>
  );
}
