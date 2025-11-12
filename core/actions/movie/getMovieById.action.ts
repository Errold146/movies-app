import { movieApi } from "@/core/api/movieApi"
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface"
import { MovieDBRes } from "@/infrastructure/interfaces/moviedb-movie.response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const getMovieByIdAction = async (id: number | string): Promise<CompleteMovie> => {
    try {
        const { data } = await movieApi.get<MovieDBRes>(`/${id}`)
        return  MovieMapper.fromTheMovieDBToCompleteMovie(data)

    } catch (error) {
        console.log(error)
        throw 'No se pudo conectar'
    }
}