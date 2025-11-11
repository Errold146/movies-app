import { FlatList, Text, View } from 'react-native'

import { Movie } from '@/infrastructure/interfaces/movie.interface'
import MoviePoster from './MoviePoster'

interface Props {
    movies: Movie[],
    title?: string
    className?: string
}

export default function MovieHorizontalList({ movies, title, className }: Props) {
    return (
        <View className={`${className}`}>
            <Text className='text-3xl font-bold px-2 my-4'>{title}</Text>

            <FlatList 
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item}) => <MoviePoster id={item.id} poster={item.poster} smallPoster />}
            />
        </View>
    )
}