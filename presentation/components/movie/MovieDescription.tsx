import { Text, View } from 'react-native'

import { Formatter } from '@/helpers/formatters'
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface'

interface Props {
    movie: CompleteMovie
}

export default function MovieDescription({ movie }: Props) {
    return (
        <View className="mx-5 mt-6">
            {/* Rating + Géneros */}
            <View className="flex flex-row items-center space-x-2">
                <Text className="text-yellow-400 font-semibold text-lg">
                    ⭐ {movie.rating}
                </Text>
                <Text className="text-gray-400 text-base">
                    {' '} {movie.genres.join(", ")}
                </Text>
            </View>

            {/* Historia */}
            <Text className="font-bold text-2xl mt-6 text-gray-700 tracking-wide">
                Historia
            </Text>
            <Text className="font-light text-gray-500 mt-3 leading-relaxed">
                {movie.description}
            </Text>

            {/* Presupuesto */}
            <Text className="font-bold text-2xl mt-6 text-gray-700 tracking-wide">
                Presupuesto
            </Text>
            <Text className="font-extrabold mt-6 text-3xl text-green-400">
                {Formatter.currency(movie.budget)}
            </Text>
        </View>
    )

}