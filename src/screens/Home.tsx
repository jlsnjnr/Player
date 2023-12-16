import {
  Box,
  Text,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
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

      <Box>
        <Carousel 
          activeSlideAlignment="start"
          data={musics}
          sliderWidth={screenWidth}
          itemWidth={screenWidth / 1.8}
          renderItem={({ item }: Items) => (
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
          )}
        />
      </Box>
      
      <PlayerBottom />
    </LinearGradient>
  );
}
