import { movieApi } from "@/core/api/movieApi"
import { MovieCreditRes } from "@/infrastructure/interfaces/creditsResponse"
import { CastMapper } from "@/infrastructure/mappers/cast.mapper"

export const getCastByIdMovie = async (movieId: number) => {
    try {
        const { data } = await movieApi.get<MovieCreditRes>(`/${movieId}/credits`)
        return data.cast.map(CastMapper.fromMovieDBCastToEntity)

    } catch (error) {
        console.log(error)
        throw 'Error al cargar los creditos'
    }
}