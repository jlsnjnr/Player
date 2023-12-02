import { View, Image } from "@gluestack-ui/themed";
import React from "react";
import { MusicNote, MusicNotes } from "phosphor-react-native";
import Source from "./../assets/cover.png";

import { StatusBar } from "expo-status-bar";
import { useLayoutRootView } from "../hooks/useLayoutRootView";
import { BottomInicial } from "../components/BottomInicial";
import { IconMusic } from "../components/IconMusic";

export function Onboarding() {
  const { onLayoutRootView, fontsLoaded } = useLayoutRootView();

  if (!fontsLoaded) return null;

  return (
    <React.Fragment>
      <StatusBar style="light" />

      <View
        onLayout={onLayoutRootView}
        position="relative"
        display="flex"
        flex={1}
      >
        <Image
          flex={1}
          size="full"
          alt="Background"
          source={Source}
          objectFit="cover"
        />

        <IconMusic bg="#0A2677" top={350} right={35} rotate="-10deg">
          <MusicNotes size={25} color="#F5C346" />
        </IconMusic>

        <IconMusic bg="#F5C346" top={208} left={35} rotate="20deg">
          <MusicNote size={25} color="#0A2677" />
        </IconMusic>

        <BottomInicial />
      </View>
    </React.Fragment>
  );
}
