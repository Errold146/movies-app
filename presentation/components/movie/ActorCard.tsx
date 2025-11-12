import { Cast } from '@/infrastructure/interfaces/cast';
import { Image, Text, View } from 'react-native';

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
    return (
        <View className="mx-10 w-[60px]">
            <Image
                source={{ uri: actor.avatar }}
                className="w-[100px] h-[150] rounded-2xl shadow-md"
                resizeMode="cover"
            />

            <View className="mt-2">
                <Text
                    numberOfLines={2}
                    className="font-semibold text-sm text-gray-900 text-center"
                >
                    {actor.name}
                </Text>
                <Text
                    numberOfLines={1}
                    className="text-gray-500 text-xs text-center italic"
                >
                    {actor.character}
                </Text>
            </View>
        </View>
    );
};