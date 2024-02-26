import { VStack, Text, Button, ButtonText } from "@gluestack-ui/themed";
import { ArrowCircleRight } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../@types/types";

export function BottomInicial() {
  const navigator = useNavigation<NavigationProps>();

  return (
    <VStack
      bg="$white"
      position="absolut"
      width="$full"
      height={250}
      bottom="$0"
      alignItems="center"
      justifyContent="center"
      borderTopRightRadius={45}
      borderTopLeftRadius={45}
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
        onPress={() => navigator.navigate("Home")}
        alignItems="center"
        justifyContent="center"
      >
        <ButtonText
          size="xl"
          fontFamily="SourceSansPro_600SemiBold"
          color="$white"
          marginRight={10}
        >
          Começar
        </ButtonText>
        <ArrowCircleRight color="white" />
      </Button>
    </VStack>
  );
}
