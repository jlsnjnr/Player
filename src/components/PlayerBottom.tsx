import { Box, Text, HStack, Button, Image } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { Pause, Play } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from 'expo-av';

export function PlayerBottom() {
  const [sound, setSound] = useState<any>();
  const [status, setStatus] = useState<any>(false);

  async function playPauseSound() {
    const { sound } = await Audio.Sound.createAsync(require('./../songs/good-night.mp3'));
    await sound.playAsync();
    setSound(sound);
  }
  
  const PauseAudio = async () => { 
    try { 
      const result = await sound.pauseAsync() ;
      setStatus(true);
    } 
    catch (error) {} 
  };

  const PlayAsync = async () => { 
    try { 
      const result = await sound.playAsync(); 
      setStatus(false);
    } 
    catch (error) {} 
  };

  console.log(status);
  
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
      <HStack px={20} py={10} alignItems="center" justifyContent="space-between">

        <HStack alignItems="center">
          <Box w={60} h={60}>
            <Image 
              alt="Background" 
              w={60}
              h={60}
              source={require("./../assets/hogwarts.png")} 
            />
          </Box>

          <Box ml={20}>
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
          onPress={() => {
            if (!sound) {
              playPauseSound();
            } else if (!status) {
              PauseAudio();
            } else if (status) {
              PlayAsync();
            }
          }}
        >
          {!status ? (
            <Pause size={24} weight="fill" />
          ) : (
            <Play size={24} weight="fill" />
          )}
        </Button>

      </HStack>

    </LinearGradient>
  );
}
