import { Heading } from "./Heading.js"
import { FavoriteButton } from "./FavoriteButton.js"

//Card
export function Card({date, motto, notes}){
    return(
      <div className='entry-card__container'>
      <Heading>{date}</Heading>
      <h3>{motto}</h3>
      <p>{notes}</p>
      <FavoriteButton/>
      </div>
    )
  }