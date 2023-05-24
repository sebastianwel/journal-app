
import { Tabs } from "./Tabs.js";

//Tab
export function Tab({children, isActive}){
    return(
        <Tabs>
        <button type="button" className={`tabs__button${isActive ? " ---active" : ""}`} 
        >{children}</button>
    
        </Tabs>
    )
}
