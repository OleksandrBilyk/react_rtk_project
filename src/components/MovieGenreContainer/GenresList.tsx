import {IGenre} from "../../interfaces";
import {FC} from "react";


interface IProps {
    genre: IGenre,

}
const GenresList: FC<IProps> = ({genre}) => {
    return (
        <div>
            <h5>{genre.name}</h5>
        </div>
    );
};

export {GenresList};