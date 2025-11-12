import { Cast } from '@/infrastructure/interfaces/cast'
import { FlatList, Text, View } from 'react-native'
import { ActorCard } from './ActorCard'

interface Props {
    cast: Cast[]
}

export default function MovieCast({ cast }: Props) {
    return (
        <View className='mt-5 mb-20'>
            <Text className='font-bold text-2xl px-5 text-gray-900 tracking-wide'>Actores</Text>

            <FlatList 
                data={cast}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10 }}
                renderItem={({item}) => <ActorCard actor={item} />}
            />
        </View>
    )
}