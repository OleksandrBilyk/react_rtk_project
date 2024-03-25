import {IRes} from "../types";
import {IGenries, IMovies} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const genreService = {
    getAll: (): IRes<IGenries> => apiService.get(urls.genre.base),
    getGenre: (with_genres:number, page: number): IRes<IMovies> => apiService.get(urls.movie.base, {params:{with_genres, page}}),
}

export {
    genreService
}