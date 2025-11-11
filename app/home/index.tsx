import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import MainSlideShow from '@/presentation/components/movies/MainSlideShow'
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList'
import { useMovies } from '@/presentation/hooks/useMovies'

export default function HomeScreen() {

    const safeArea = useSafeAreaInsets()
    const { nowPlayingQuery, popularQuery, topRatedrQuery, upComingrQuery } = useMovies()

    if ( nowPlayingQuery.isLoading && !nowPlayingQuery.data ) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='purple' size={60} />
            </View>
        )
    }

    return (
        <ScrollView 
            className='mt-2' 
            contentContainerStyle={{ 
                paddingTop: safeArea.top,
                paddingBottom: safeArea.bottom + 40,
            }}
            showsVerticalScrollIndicator={false}
        >
            <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

            {/* Carrusel */}
            <MainSlideShow 
                movies={nowPlayingQuery.data ?? []}
            />

            {/* Populares */}
            <MovieHorizontalList 
                movies={popularQuery.data ?? []}
                title='Populares'
                className='mb-5'
            />

            {/* Mejor Valorados */}
            <MovieHorizontalList 
                movies={topRatedrQuery.data ?? []}
                title='Mejor Valoradas'
                className='mb-5'
            />

            {/* Proximas */}
            <MovieHorizontalList 
                movies={upComingrQuery.data ?? []}
                title='Próximente en cines'
            />
        </ScrollView>
    )

}