import react from "react";

// creating context in react
const UserContext = react.createContext();


const UserContextProvier = ({children})=>{
    const [ user,setUser] = react.useState;
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}          
        /* here children are components- we add userContextProvider as rapper for each  component that use userContext  */
        </UserContext.Provider>
    )
}

export {UserContext,UserContextProvier};

// context api store data till the page is not refreshed 
// to store data permament we use local or session storage with context api
