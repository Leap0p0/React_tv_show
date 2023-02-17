import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./../../index.css";

export function TVShowList(props) {
    return (
        <>
        <div className="text-white font-[60px] font-roboto text-[20px]">You may also like:</div>
        <div className="scroll flex w-screen-[25px] overflow-x-hidden hover:overflow-x-scroll mt-3 pb-[30px] ">
            {props.tvShowList.map((tvShow) =>{
                return (
                    <span key={tvShow.id} className="">
                        <TVShowListItem onClick={props.onClickItem} tvShow={tvShow} />
                    </span>
                );
            })}
        </div>
        </>
    );
} 