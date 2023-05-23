import { ReactComponent as Star } from "../resources/star.svg";
import {ReactComponent as StarFilled} from "../resources/star-filled.svg"
import { useState } from "react";

export function FavoriteButton(){
let [isFavorite, setFavorite] = useState(false)
    return(
        <button className="bookmark__star" onClick= {()=> setFavorite(!isFavorite)}>
        {isFavorite ? <StarFilled /> : <Star />}
        </button>
    )
}