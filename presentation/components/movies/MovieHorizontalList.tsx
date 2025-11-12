import { useEffect, useRef } from 'react'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native'

import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
    movies: Movie[],
    title?: string
    className?: string
    loadNextPage?: () => void
}

export default function MovieHorizontalList({ movies, title, className, loadNextPage }: Props) {

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200);
    }, [movies])
    

    const isLoading = useRef(false)

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if ( isLoading.current ) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
        const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width

        if ( !isEndReached ) return;
        isLoading.current = true

        // Carga las siguientes películas.
        loadNextPage && loadNextPage()
    }

    return (
        <View className={`${className}`}>
            <Text className='text-3xl font-bold px-2 my-4'>{title}</Text>

            <FlatList 
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, idx) => `${item.id}-${idx}`}
                renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
                onScroll={onScroll}
            />
        </View>
    )
}