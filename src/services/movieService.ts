import {IRes} from "../types/IResType";
import {IMovies, ISearchRes} from "../interfaces/movieInterface";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const movieService = {
    getAll: (page: any): IRes<IMovies> => apiService.get(urls.movie.base, {params:{page}}),
    getById:(id:number)=>apiService.get(urls.movie.movie_info.byIds(id)),
    findFilms:(query:string, page:number): IRes<ISearchRes>=>apiService.get(urls.movie.find, {params:{query, page}})
}

export {
    movieService
}