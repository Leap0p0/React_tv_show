import s from "./../../index.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function Rating( { rate }) {
    const starList = [];

    const starFillCount = Math.floor(rate);
    const starHalfCount = rate - starFillCount >= 0.5;

    const StarEmptyCount = 5 - starFillCount - (starHalfCount ? 1 : 0);

    for (let i = 1; i <= starFillCount; i++) {
        starList.push(<StarFill key={"star-fill" + i} />);
    }

    if (starHalfCount) {
        starList.push(<StarHalf key={"star-half"} />);
    }

    for (let i = 1; i <= StarEmptyCount; i++) {
        starList.push(<StarEmpty key={"star-empty" + i} />);
    }
    return <div className="flex mt-[5px] text-white">{starList}</div>;
}