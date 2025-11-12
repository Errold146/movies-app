import { movieApi } from "@/core/api/movieApi"
import { MovieDBResponse } from "@/infrastructure/interfaces/moviebd-response"
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"

interface Options {
    page?: number
}

export const TopRatedMoviesAction = async ({ page = 1 }: Options) => {
    try {
        const { data } = await movieApi.get<MovieDBResponse>('/top_rated', {
            params: { page }
        })
        const movies = data.results.map(MovieMapper.fromMovieDBToMovie)

        return movies

    } catch (error) {
        console.log(error)
        throw 'No se puede acceder...'
    }
}