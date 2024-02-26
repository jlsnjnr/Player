import {
  Box,
  Button,
  Text,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { HeaderHome } from "../components/HeaderHome";
import { PlayerBottom } from "../components/PlayerBottom";
import { musics, musicsLiked } from "../utils/data";
import { Image } from "@gluestack-ui/themed";
import Carousel from "react-native-snap-carousel";
import { Dimensions, TouchableOpacity } from "react-native";
import { Heart } from "phosphor-react-native";
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

export function Home() {
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
      <HeaderHome />

      <Box>
        <Carousel
          activeSlideAlignment="start"
          data={musics}
          sliderWidth={screenWidth}
          itemWidth={screenWidth / 1.8}
          renderItem={({ item }: Items) => (
            <TouchableOpacity onPress={() => navigate('Music')}>
              <Box px={20} key={item.id}>
                <Image alt="Background" w={200} h={200} style={{ borderRadius: 10 }} source={item.url} />

                <Text
                  color="$white"
                  fontWeight="$bold"
                  size="lg"
                >
                  {item.name}
                </Text>
                <Text my={5} color="#D1D5DB">{item.author}</Text>
              </Box>
            </TouchableOpacity>
          )}
        />
      </Box>

      <Text size="xl" px={20} py={20} fontWeight="bold" color="$white">Minhas curtidas</Text>
      <Box>
        <Carousel
          activeSlideAlignment="start"
          data={musicsLiked}
          sliderWidth={screenWidth}
          itemWidth={screenWidth / 1.8}
          renderItem={({ item }: Items) => (
            <TouchableOpacity onPress={() => navigate('Music')}>
              <Box px={20} key={item.id} position="relative">
                <Image alt="Background" w={200} h={200} style={{ borderRadius: 10 }} source={item.url} />

                {item.liked && (
                  <Box position="absolute" top={10} right={30}>
                    <Heart size={30} color="white" weight="fill" />
                  </Box>
                )}

                <Text
                  color="$white"
                  fontWeight="$bold"
                  size="lg"
                >
                  {item.name}
                </Text>
                <Text my={5} color="#D1D5DB">{item.author}</Text>
              </Box>
            </TouchableOpacity>
          )}
        />
      </Box>

      <PlayerBottom />
    </LinearGradient>
  );
}
