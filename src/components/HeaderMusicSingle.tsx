import { Box, Text } from "@gluestack-ui/themed";
import { ArrowLeft, SpeakerLow } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProps } from "../@types/types";
import { useNavigation } from "@react-navigation/native";

export function HeaderMusicSingle () {
    const { goBack } = useNavigation<NavigationProps>();

    return (
        <SafeAreaView>
            <Box
                alignItems="center"
                justifyContent="space-between"
                flexDirection="row"
                p={20}
            >
                <TouchableOpacity onPress={() => goBack()}>
                    <ArrowLeft color="white" />
                </TouchableOpacity>
                <Text fontFamily="SourceSansPro_700Bold" color="$white" size="2xl">Tocando agora</Text>
                <SpeakerLow color="white" />
            </Box>
        </SafeAreaView>
    );
}