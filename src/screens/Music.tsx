import { HStack, Image, Text } from "@gluestack-ui/themed";
import { Box } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowLeft, Heart, Play, Repeat, Shuffle, SkipBack, SkipForward, SpeakerLow } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { musics } from "../utils/data";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../@types/types";

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
    const { navigate } = useNavigation<NavigationProps>();
    const { width: screenWidth } = Dimensions.get("window");

    return (
        <LinearGradient
            colors={["#0A2677", "#0B1226"]}
            style={{
                position: "relative",
                height: "100%",
            }}
        >
            <SafeAreaView>
                <Box
                    alignItems="center"
                    justifyContent="space-between"
                    flexDirection="row"
                    p={20}
                >
                    <ArrowLeft color="white" />
                    <Text fontFamily="SourceSansPro_700Bold" color="$white" size="2xl">Tocando agora</Text>
                    <SpeakerLow color="white" />
                </Box>
            </SafeAreaView>

            <Box py={40}>
                <Carousel
                    activeSlideAlignment="start"
                    data={musics}
                    sliderWidth={screenWidth}
                    itemWidth={screenWidth / 1.2}
                    renderItem={({ item }: Items) => (
                        <Box w={"100%"} px={20} key={item.id}>
                            <Image alt="Background" w={"100%"} h={350} style={{ borderRadius: 10 }} source={item.url} />
                        </Box>
                    )}
                />

                <HStack my={20} px={20} justifyContent="space-between" alignItems="center">
                    <Box>
                        <Text
                            color="$white"
                            fontWeight="$bold"
                            size="3xl"
                            maxWidth={300}
                        >
                            Overture To The Unwritten
                        </Text>
                        <Text my={5} color="#D1D5DB">Hogwarts Legacy</Text>
                    </Box>
                    <Heart size={30} color="white" />
                </HStack>

                <HStack my={20} px={20} justifyContent="space-between" alignItems="center">
                    <TouchableOpacity><Repeat size={30} color="white" /></TouchableOpacity>
                    <HStack>
                        <TouchableOpacity><SkipBack size={30} color="white" /></TouchableOpacity>
                        <TouchableOpacity><Play size={30} color="white" /></TouchableOpacity>
                        <TouchableOpacity><SkipForward size={30} color="white" /></TouchableOpacity>
                    </HStack>
                    <TouchableOpacity>
                        <Shuffle size={30} color="white" />
                    </TouchableOpacity>
                </HStack>
            </Box>
        </LinearGradient>
    )
}