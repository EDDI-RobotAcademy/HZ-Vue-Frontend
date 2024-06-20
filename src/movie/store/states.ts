export interface MovieState {
    movieList: Movie[]
    movie: Movie | null
}

export interface Movie {
    movieId: number
    movieName: string
    movieReleaseDate: string
    movieFilmRating: string
    movieGenre: string
    movieCountry: string
    movieRunningTime: string
    movieSummary: string
    moviePrice: string
    registeredDate: string
    updatedDate: string
}

const state: MovieState = {
    movieList: [],
    movie: null,
}

export default state