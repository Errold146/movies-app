import { useInfiniteQuery, useQuery } from "@tanstack/react-query"

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
    
    const popularQuery = useInfiniteQuery({ 
        initialPageParam: 1,
        queryKey: ['movies', 'popular'], 
        queryFn: ({pageParam}) => {
            return PopularMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (_, pages) => pages.length + 1
    })
    
    const topRatedrQuery = useInfiniteQuery({ 
        initialPageParam: 1,
        queryKey: ['movies', 'top_rated'], 
        queryFn: ({pageParam}) => {
            return TopRatedMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (_, pages) => pages.length + 1
    })
    
    const upComingrQuery = useInfiniteQuery({ 
        initialPageParam: 1,
        queryKey: ['movies', 'upcoming'], 
        queryFn: ({pageParam}) => {
            return UpComingMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24,
        getNextPageParam: (_, pages) => pages.length + 1
    })

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedrQuery,
        upComingrQuery,
    }
}