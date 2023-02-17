import s from "./../../index.css";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";

export function TVShowListItem(props) {
    return (
        <div onClick={ () => props.onClick(props.tvShow)} className="relative container cursor-pointer w-[300px]">
            <img className="img rounded-[10px]" src={SMALL_IMG_COVER_BASE_URL + props.tvShow.backdrop_path} alt={props.tvShow.name} />
            <div className="title absolute mt-[-40px] h-[40px] w-[276px] pl-[20px] pt-[8px] bg-black bg-opacity-75 rounded-b-[10px] text-ellipsis overflow-hidden text-white whitespace-nowrap">
                {props.tvShow.name}
            </div>
        </div>
    );
}