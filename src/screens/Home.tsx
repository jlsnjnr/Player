import {
  ScrollView,
  Box,
  Text,
  HStack,
  Button,
  FlatList,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { HeaderHome } from "../components/HeaderHome";
import { PlayerBottom } from "../components/PlayerBottom";
import { musics } from "../utils/data";
import { Image } from "@gluestack-ui/themed";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";

interface Items {
  item: {
    name: string;
    author: string;
    url: string;
    isActive: boolean;
    liked: boolean;
    id: number;
  };
}

const { width: screenWidth } = Dimensions.get("window");

export function Home() {
  return (
    <LinearGradient
      colors={["#0A2677", "#0B1226"]}
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <HeaderHome />

      <Box ml={20}>
        <Carousel
          data={musics}
          renderItem={({ item }: Items) => (
            <Box key={item.id}>
              <Text>{item.name}</Text>
              <Text>{item.author}</Text>
              <Image alt="Background" w={183} h={183} source={item.url} />

              <Text>{item.isActive}</Text>
              <Text>{item.liked}</Text>
            </Box>
          )}
          sliderWidth={screenWidth}
          itemWidth={screenWidth / 0.5}
        />
      </Box>

      <PlayerBottom />
    </LinearGradient>
  );
}
