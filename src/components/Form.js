import { Heading } from "./Heading.js"
import { Card } from "./Card.js"


//Form
export function Form(){
    return(
      <form className="form">
      <Heading>New Entry</Heading>
      <label id="motto" htmlFor="motto__input">Motto:</label>
      <input id="motto__input" className='form__motto'></input>
      <label id="notes" htmlFor="notes__input">Notes:</label>
      <textarea id="notes__input" rows={4}/>
      <button type='submit' className='form__button' >Create</button>
      </form>
    )
  }

