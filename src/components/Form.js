import { Heading } from "./Heading.js"



//Form
export function Form({onAddEntry}){
//Submit Eevent-Handler to work with data from the form
function handleSubmit(event){
  event.preventDefault();
  const newData = new FormData(event.target);
  const data = Object.fromEntries(newData);
  onAddEntry(data);
}
    return(
      <form className="form" onSubmit={handleSubmit}>
      <Heading>New Entry</Heading>
      <label id="motto" htmlFor="motto__input">Motto:</label>
      <input id="motto__input" className='form__motto' name="motto"></input>
      <label id="notes" htmlFor="notes__input" >Notes:</label>
      <textarea id="notes__input" rows={4} name="notes"/>
      <button type='submit' className='form__button' >Create</button>
      </form>
    )
  }

