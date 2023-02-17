import s from "./../../index.css";
import { Rating } from "../Rating/Rating";

export function TVShowDetails({ tvShow }) {
    const ratting = tvShow.vote_average / 2;
    return (
        <div>
            <div className="font-normal text-[35px] text-white"> {tvShow.name} </div>
            <div className="flex">
                <div><Rating rate={ratting}/></div>
                <div className="text-white ml-[5px]">{ratting} / 5</div>
            </div>
            <div className="text-white font-roboto text-[20px] h-[120px] overflow-y-hidden hover:overflow-y-auto mt-[10px]">{tvShow.overview}</div>
        </div>
    );
}