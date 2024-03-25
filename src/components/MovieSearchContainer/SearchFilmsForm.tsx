import {useEffect} from "react";
import {SubmitHandler, useForm} from "react-hook-form";

import style from "./MovieFindCard.module.css"
import {IRequest} from "../../interfaces";
import {findFilmsActions} from "../../store";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {MovieListCard} from "../MovieContainer";



const SearchFilmsForm = () => {
    const {reset, handleSubmit, register} = useForm<IRequest>();
    const {movies, page, query, total_pages} = useAppSelector(state => state.find_movies);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(findFilmsActions.getFindMovie({query, page}))
    }, [query, page, dispatch])

    const find: SubmitHandler<IRequest> = ({keyword}) => {
        dispatch(findFilmsActions.find_keyword(keyword))
        reset()
    };
    return (
        <div>
            <form className={style.search_form} onSubmit={handleSubmit(find)}>
                <input className={style.input_keyword} type="text" placeholder={'keyword'} {...register('keyword', {required:true})}/>
                <button className={style.button_find}>Find</button>
            </form>
            <div className={style.Movies_block}>
                {movies.map(movie_find => <MovieListCard key={movie_find.id} movie={movie_find} />)}
            </div>
            {total_pages<=1 ? <div></div> :
                <div className={style.buttons_panel}>
                    <div className={style.buttons_panel}>
                        {page <=1 ? <div></div> :
                            <button className={style.button_pagination} disabled={(page <=1 )} onClick={() => dispatch(findFilmsActions.prevPage())}>prev</button>}
                        <div className={style.page_marker}>{page}</div>
                        {page >= total_pages ? <div></div> :
                            <button className={style.button_pagination} disabled={(page >= total_pages)} onClick={() => dispatch(findFilmsActions.nextPage())} >next</button>}
                    </div>
                </div>
            }
        </div>

    );
};
export {SearchFilmsForm};