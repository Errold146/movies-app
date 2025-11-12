import { getCastByIdMovie } from "@/core/actions/movie/getCastByIdMovie"
import { getMovieByIdAction } from "@/core/actions/movie/getMovieById.action"
import { useQuery } from "@tanstack/react-query"

export function useOneMovie(id: number | string) {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByIdAction(id),
        staleTime: 1000 * 60 * 60 * 24
    })
    
    const castQuery = useQuery({
        queryKey: ['movie', id, 'cast'],
        queryFn: () => getCastByIdMovie(+id),
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        movieQuery,
        castQuery
    }
}