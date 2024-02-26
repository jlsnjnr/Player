import { HStack, Image, Text } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Heart, Play, Repeat, Shuffle, SkipBack, SkipForward } from "phosphor-react-native";
import Carousel from "react-native-snap-carousel";
import { musics } from "../utils/data";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../@types/types";
import { useState } from "react";
import { HeaderMusicSingle } from "../components/HeaderMusicSingle";

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


export function Music() {
    const [currrentSong, setCurrentSong] = useState({
        name: "Overture To The Unwritten",
        author: "Hogwarts Legacy",
        isLiked: false
    });
    const { navigate, goBack } = useNavigation<NavigationProps>();
    const { width: screenWidth } = Dimensions.get("window");

    return (
        <LinearGradient
            colors={["#0A2677", "#0B1226"]}
            style={{
                position: "relative",
                height: "100%",
            }}
        >
            <HeaderMusicSingle />

            <Box py={40}>
                <Carousel
                    activeSlideAlignment="start"
                    data={musics}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth / 1.14}
                    renderItem={({ item }: Items) => (
                        <Box w={"100%"} px={20} key={item.id}>
                            <Image alt="Background" w={"100%"} h={350} style={{ borderRadius: 10 }} source={item.url} />
                        </Box>
                    )}
                    onResponderTerminate={() => console.log("aqui")}
                />

                <HStack my={20} px={20} justifyContent="space-between" alignItems="center">
                    <Box>
                        <Text
                            color="$white"
                            fontWeight="$bold"
                            size="3xl"
                            maxWidth={300}
                        >
                            {currrentSong.name}
                        </Text>
                        <Text my={5} color="#D1D5DB">{currrentSong.author}</Text>
                    </Box>
                    <Heart size={30} color="white" />
                </HStack>
                
                {/* player */}
                <HStack mx={20} alignItems="center" justifyContent="space-between" py={10}>
                    <Text color="$white">00:34</Text>
                    <Text color="$white">04:11</Text>
                </HStack>

                <Box mx={20}>
                    <Box h={4} mr={20} w={"$full"} bg="#374151" mt={3}>
                        <Box
                            w={120}
                            h={4}
                            rounded="$full"
                            bg="#F5C346"
                            position="relative"
                            alignItems="center"
                            justifyContent="center"
                            zIndex={999}
                        />
                        <Box
                            w={8}
                            h={8}
                            rounded="$full"
                            bg="$white"
                            position="relative"
                            right={-3}
                            ml={110}
                            bottom={6}
                            alignItems="center"
                            justifyContent="center"
                            zIndex={999}
                        />
                    </Box>
                </Box>
                
                {/* controls */}
                <HStack  my={20} px={20} justifyContent="space-between" alignItems="center">
                    <TouchableOpacity><Repeat size={30} color="white" /></TouchableOpacity>
                    <HStack gap={20} alignItems="center">
                        <TouchableOpacity><SkipBack weight="fill" size={30} color="white" /></TouchableOpacity>

                        <TouchableOpacity>
                            <Box rounded={"$full"} alignItems="center" justifyContent="center" w={48} h={48} bg="#F5C346">
                                <Play weight="fill" size={22} color="#0B142F" />
                            </Box>
                        </TouchableOpacity>

                        <TouchableOpacity><SkipForward weight="fill" size={30} color="white" /></TouchableOpacity>
                    </HStack>
                    <TouchableOpacity>
                        <Shuffle size={30} color="white" />
                    </TouchableOpacity>
                </HStack>
            </Box>
        </LinearGradient>
    )
}