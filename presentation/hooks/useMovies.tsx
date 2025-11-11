import { useQuery } from "@tanstack/react-query"

import { NowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { PopularMoviesAction } from "@/core/actions/movies/popular.action"
import { TopRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { UpComingMoviesAction } from "@/core/actions/movies/upcoming.action"

export const useMovies = () => {
    const nowPlayingQuery = useQuery({ 
        queryKey: ['movies', 'nowPlaying'], 
        queryFn: NowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24
    })
    
    const popularQuery = useQuery({ 
        queryKey: ['movies', 'popular'], 
        queryFn: PopularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })
    
    const topRatedrQuery = useQuery({ 
        queryKey: ['movies', 'top_rated'], 
        queryFn: TopRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })
    
    const upComingrQuery = useQuery({ 
        queryKey: ['movies', 'upcoming'], 
        queryFn: UpComingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedrQuery,
        upComingrQuery,
    }
}