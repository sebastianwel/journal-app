
import './App.css';
import { Header } from "./components/Header.js"
import {Main} from "./components/Main.js"
import { Form } from './components/Form.js';
import { Entries } from "./components/Entries.js"
import { Tab } from './components/Tab.js';
import {Footer} from "./components/Footer.js"
import { Tabs } from './components/Tabs';
// import { Children } from 'react';

//App
function App() {
  return (
    <>
    <Header>Sebastians Journal</Header>
    <Main>
        <Form/>
        <Entries/>
    </Main>
    <Footer>Journal App - 2023</Footer>
    </>
  );
}

















export default App;
