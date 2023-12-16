import { Text, Box } from "@gluestack-ui/themed";
import { MagnifyingGlass } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function HeaderHome() {
  return (
    <SafeAreaView>
      <Box
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
        p={20}
      >
        <Text fontFamily="SourceSansPro_700Bold" color="$white" size="2xl">
          Recomendações
        </Text>

        <MagnifyingGlass color="white" />
      </Box>
    </SafeAreaView>
  );
}
