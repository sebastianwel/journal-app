
import {Card} from "./Card.js"
import { Tab } from "./Tab.js";
import { Tabs } from "./Tabs.js";

//Entries
//using the new created array from our App component to map the array
export function Entries({entries}){ 
    return(
    <section className='entries'>
      <Tabs>
        <Tab>All Entries</Tab>
        <Tab>Favorites</Tab>
      </Tabs>
      {entries.map((entry) => (
            <Card 
                  key={entry.id}
                  date={entry.date}
                  motto={entry.motto}
                  notes={entry.notes}
            />
      ))}
    </section>
    )
  }

