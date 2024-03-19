import {useEffect, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import {IRequest, ISearchRes} from "../../interfaces/movieInterface";
import {movieService} from "../../services/movieService";
import {MovieFindCard} from "./MovieFindCard";
import style from "./MovieFindCard.module.css"
import {usePageQuery} from "../../hooks/usePageQuery";



const SearchFilmsForm = () => {
    const [search_res,  setSearchRes] = useState<ISearchRes>({results: [], total_pages:0});
    const {reset, handleSubmit, register} = useForm<IRequest>();
    const [query, setQuery] = useState<string>(null);
    const {page, next, prev, default_page} = usePageQuery();
    // const [black_theme,] = useAppContext();


    useEffect(() => {
        movieService.findFilms(query, +page).then(({data}) => {
            setSearchRes(data)
        })
    }, [page, query])

    const find: SubmitHandler<IRequest> = ({keyword}) => {
        console.log(keyword)

        setQuery(keyword)
        default_page()
        reset()
    };
    return (
        <div>
            <form className={style.search_form} onSubmit={handleSubmit(find)}>
                <input className={style.input_keyword} type="text" placeholder={'keyword'} {...register('keyword', {required:true})}/>
                <button className={style.button_find}>Find</button>
            </form>
            <div className={style.Movies_block}>
                {search_res.results.map(movie_find => <MovieFindCard key={movie_find.id} movie_find={movie_find} />)}
            </div>
            {search_res.total_pages<=1 ? <div></div> :
                <div className={style.buttons_panel}>
                    <button className={style.button_pagination} disabled={(+page <=1 )} onClick={prev}>prev</button>
                    <div className={style.page_marker}>{page}</div>
                    <button className={style.button_pagination} disabled={(+page >= search_res.total_pages)} onClick={next}>next</button>
                </div>}
        </div>


    );
};
export {SearchFilmsForm};