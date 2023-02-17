import s from "./../../index.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar(props) {
    function submit(e){
        if(e.key === "Enter" && e.target.value.trim() !== ""){
            console.log("***", e.target.value)
            props.onSubmit(e.target.value);
        }
    }
    return (
    <>
        <SearchIcon size={27} className="absolute text-white pt-2 mt[7px] ml-[15px]" />
        <input onKeyUp={submit} className="rounded-[30px] bg-[#d9d9d96e] text-white h-[30px] font-[100px] text-[20px] w-full border-transparent pt-[18px] pr-[18px] pb-[18px] pl-[50px]" type="text" placeholder="Search a Tv Show"/>
    </>
    );
} 