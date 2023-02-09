import { MenuListItem } from "../MenuListItem/MenuListItem";
import s from "./style.module.css";

const DIFFICULTIES = ["Low", "Medium", "Hight", "Insane"];

export function MenuList(props) {
    return (
        <div className={s.container}>
           {
            DIFFICULTIES.map((diff) => <MenuListItem onClick={props.onItemClick} difficulty = {diff} isSelected={props.difficulty === diff} />)
           }
        </div>
    );
}