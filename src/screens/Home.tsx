import {
  Box,
  Button,
  ButtonText,
  View,
  Image,
  Text,
  VStack,
  ButtonIcon,
} from "@gluestack-ui/themed";
import React, { useCallback } from "react";
import { ArrowCircleRight, MusicNote, MusicNotes } from "phosphor-react-native";
import Source from "./../assets/cover.png";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import {
  SourceSansPro_200ExtraLight,
  SourceSansPro_200ExtraLight_Italic,
  SourceSansPro_300Light,
  SourceSansPro_300Light_Italic,
  SourceSansPro_400Regular,
  SourceSansPro_400Regular_Italic,
  SourceSansPro_600SemiBold,
  SourceSansPro_600SemiBold_Italic,
  SourceSansPro_700Bold,
  SourceSansPro_700Bold_Italic,
  SourceSansPro_900Black,
  SourceSansPro_900Black_Italic,
} from "@expo-google-fonts/source-sans-pro";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export function Home() {
  const [fontsLoaded] = useFonts({
    SourceSansPro_200ExtraLight,
    SourceSansPro_200ExtraLight_Italic,
    SourceSansPro_300Light,
    SourceSansPro_300Light_Italic,
    SourceSansPro_400Regular,
    SourceSansPro_400Regular_Italic,
    SourceSansPro_600SemiBold,
    SourceSansPro_600SemiBold_Italic,
    SourceSansPro_700Bold,
    SourceSansPro_700Bold_Italic,
    SourceSansPro_900Black,
    SourceSansPro_900Black_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      position="relative"
      bg="$red300"
      display="flex"
      flex={1}
    >
      <StatusBar style="light" />
      <Image
        flex={1}
        size="full"
        alt="Background"
        source={Source}
        objectFit="cover"
      />

      <Box
        alignItems="center"
        justifyContent="center"
        w={46}
        h={46}
        bg="#F5C346"
        position="absolute"
        top={208}
        left={35}
        rounded={10}
        style={{ transform: "rotate(20deg)" }}
      >
        <MusicNote size={25} color="#0A2677" />
      </Box>

      <Box
        alignItems="center"
        justifyContent="center"
        w={46}
        h={46}
        bg="#0A2677"
        position="absolute"
        top={350}
        right={35}
        rounded={10}
        style={{ transform: "rotate(-10deg)" }}
      >
        <MusicNotes size={25} color="#F5C346" />
      </Box>

      <VStack
        bg="$white"
        position="absolute"
        width="$full"
        height={250}
        bottom="$0"
        alignItems="center"
        justifyContent="center"
        borderTopRightRadius={45}
        borderTopLeftRadius={45}
        gap="$1/5"
        paddingHorizontal="$10"
      >
        <Text
          width="$full"
          fontFamily="SourceSansPro_600SemiBold"
          color="#0B1226"
          size="4xl"
        >
          A{" "}
          <Text
            size="4xl"
            color="#F5C346"
            fontFamily="SourceSansPro_600SemiBold_Italic"
          >
            melhor{" "}
          </Text>
          coleção músical está aqui
        </Text>

        <Button
          width="$full"
          variant="solid"
          action="primary"
          height="$12"
          rounded="$full"
          backgroundColor="#F5C346"
          gap="$1.5"
        >
          <ButtonText
            size="xl"
            fontFamily="SourceSansPro_600SemiBold"
            color="$white"
          >
            Começar
          </ButtonText>
          <ArrowCircleRight color="white" />
        </Button>
      </VStack>
    </View>
  );
}
