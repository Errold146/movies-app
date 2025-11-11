import { Movie } from "../interfaces/movie.interface";
import { Result } from "../interfaces/moviebd-response";

export class MovieMapper {

    static fromMovieDBToMovie = (movie: Result): Movie => {


        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            relaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
        }
    }
}