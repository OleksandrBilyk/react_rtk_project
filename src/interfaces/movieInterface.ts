export interface IMovie {
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    poster_path: string,
    title: string,
    vote_average: number,
    vote_count: number
}
export interface IMovie_details {
    adult: boolean,
    backdrop_path: string,
    budget: number
    genres: [IGenre],
    homepage: string
    id: number,
    imdb_id: string
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies:{}[],
    production_countries:{}[],
    release_date: string,
    revenue: number,
    runtime:number,
    spoken_languages:{}[],
    status:string,
    tagline:string,
    title: string,
    video: boolean
    vote_average: number,
    vote_count: number
}
export interface IMovies {
    page: string,
    results: IMovie[],
    total_pages: number,
    total_results: number,

}
export interface IRequest{
    keyword: string
}
export interface ISearchRes{
    results: IMovie[],
    total_pages: number,
    page: number,
    total_results: number
}
export interface IGenre{
    id: number,
    name: string
}
export interface IRecGenre{
    with_genres: number,
    page: number
}
export interface IGenries{
    genres: IGenre[]
}
export interface IRecFindKeyword{
    query: string,
    page: number
}