import { movieApi } from "@/core/api/movieApi"
import { MovieDBResponse } from "@/infrastructure/interfaces/moviebd-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

export const UpComingMoviesAction = async () => {
    try {
        const { data } = await movieApi.get<MovieDBResponse>('/upcoming')
        const movies = data.results.map(MovieMapper.fromMovieDBToMovie)

        return movies

    } catch (error) {
        console.log(error)
        throw 'No se puede acceder...'
    }
}