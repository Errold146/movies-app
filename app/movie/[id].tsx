import { useLocalSearchParams } from 'expo-router'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'

import MovieCast from '@/presentation/components/movie/MovieCast'
import MovieDescription from '@/presentation/components/movie/MovieDescription'
import MovieHeader from '@/presentation/components/movie/MovieHeader'
import { useOneMovie } from '@/presentation/hooks/useOneMovie'

export default function MovieScreen() {

    const { id } = useLocalSearchParams()
    const { movieQuery, castQuery } = useOneMovie(+id)
   
    if ( movieQuery.isLoading || !movieQuery.data ) {
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-4 text-2xl font-black'>Cargando. Espere por favor</Text>
                <ActivityIndicator color='purple' size={60} />
            </View>
        )
    }

    return (
        <ScrollView>
            <MovieHeader 
                poster={movieQuery.data.poster}
                originalTitle={movieQuery.data.originalTitle}
                title={movieQuery.data.title}
            />

            <MovieDescription movie={movieQuery.data} />

            <MovieCast cast={castQuery.data ?? []} />
        </ScrollView>
    )
}