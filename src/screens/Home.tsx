import {
  Box,
  Button,
  ButtonText,
  View,
  Image,
  Text,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import React from "react";

import Source from "./../assets/cover.png";

export function Home() {
  return (
    <View position="relative" bg="$red300" display="flex" flex={1}>
      <Image
        flex={1}
        size="full"
        alt="Background"
        source={Source}
        objectFit="contain"
      />

      <VStack
        bg="$white"
        position="absolute"
        width="$full"
        height="$64"
        bottom="$0"
        alignItems="center"
        justifyContent="center"
        borderTopRightRadius={"$3xl"}
        borderTopLeftRadius={"$3xl"}
        gap="$1/5"
      >
        <Text color="#0B1226" size="3xl">
          A{" "}
          <Text size="3xl" color="#F5C346" italic>
            melhor
          </Text>{" "}
          coleção músical está aqui
        </Text>

        <Button
          width="90%"
          variant="solid"
          action="primary"
          height="$12"
          rounded="$full"
          backgroundColor="#F5C346"
        >
          <ButtonText color="$white">Começar</ButtonText>
        </Button>
      </VStack>
    </View>
  );
}
