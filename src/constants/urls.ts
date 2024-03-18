const baseURL:string = 'https://api.themoviedb.org/'

const movies = '3/discover/movie'
const movie = "3/movie"
const genre = '3/genre/movie/list'
const find = '3/search/keyword'

const urls = {
    movie: {
        base: movies,
        movie_info: {
            byIds: (id:number) => `${movie}/${id}`
        },
        find: find,

    },
    genre:{
        base: genre
    }
}

export {
    baseURL,
    urls
}