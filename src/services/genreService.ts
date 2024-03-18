import {IRes} from "../types/IResType";
import {IGenries, IMovies} from "../interfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const genreService = {
    getAll: (): IRes<IGenries> => apiService.get(urls.genre.base),
    getAllGenre: (with_genres:number, page: number): IRes<IMovies> => apiService.get(urls.movie.base, {params:{with_genres, page}}),
}

export {
    genreService
}