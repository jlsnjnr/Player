import { ScrollView, Box, Text, HStack, Button } from "@gluestack-ui/themed";
import { useState } from "react";
import { HeaderHome } from "../components/HeaderHome";
import { Pause, Play } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";

export function PlayerBottom() {
  const [play, setPlay] = useState(false);

  return (
    <LinearGradient
      colors={["rgba(10, 38, 119, 0)", "#121C39"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        zIndex: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <Box h={4} w={120} bg="#F5C346" mt={3}>
        <Box
          w={8}
          h={8}
          rounded="$full"
          bg="$white"
          position="relative"
          right={-3}
          ml="auto"
          bottom={2}
          alignItems="center"
          justifyContent="center"
          zIndex={999}
        />
      </Box>
      <HStack p={20} alignItems="center" justifyContent="space-between">
        <HStack gap={12}>
          <Box w={48} h={48} bg="$amber500" rounded={10} />
          <Box>
            <Text
              size="md"
              color="$white"
              fontFamily="SourceSansPro_600SemiBold"
            >
              Overture To The Unwritten
            </Text>
            <Text
              size="sm"
              color="#D1D5DB"
              fontFamily="SourceSansPro_400Regular"
            >
              Hogwarts Legacy
            </Text>
          </Box>
        </HStack>

        <Button
          w={48}
          h={48}
          rounded="$full"
          bg="#F5C346"
          alignItems="center"
          justifyContent="center"
          onPress={() => setPlay(!play)}
        >
          {play ? (
            <Play size={24} weight="fill" />
          ) : (
            <Pause size={24} weight="fill" />
          )}
        </Button>
      </HStack>
    </LinearGradient>
  );
}
