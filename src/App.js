
import './App.css';
import { Header } from "./components/Header.js"
import {Main} from "./components/Main.js"
import { Form } from './components/Form.js';
import { Entries } from "./components/Entries.js"
import {Footer} from "./components/Footer.js"
import { uid } from 'uid';
import useLocalStorageState from "use-local-storage-state"
// import { Children } from 'react';

//initialEntries
const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2023",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2023",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2023",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2023",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];


//App
function App() {
//declaration of a state-variable for entries and setting the initialEntries as initial state
const [entries, setEntries] = useLocalStorageState("Entries", {defaultValue: initialEntries})
//Add-Entry Handler to create a new object within the initialEntries array, consisting of the same keys.
function handleAddEntry(newEntry){
const date = new Date().toLocaleDateString("en-us", { dateStyle: "medium" });
const entry = {
  id: uid(),
  date: date,
  motto: newEntry.motto,
  notes: newEntry.notes,
};

//Using the setEntries function to create a new array consisting of the initial and new objects
setEntries([entry, ...entries])
}
  return (
    <>
    <Header>Sebastians Journal</Header>
    <Main>
        <Form onAddEntry={handleAddEntry}/>
        <Entries entries={entries}/>
    </Main>
    <Footer>Journal App - 2023</Footer>
    </>
  );
}

















export default App;
