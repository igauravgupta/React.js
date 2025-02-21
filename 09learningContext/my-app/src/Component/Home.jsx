import react, { useContext } from "react";
import { UserContextProvier, UserContext } from "../Context/UserContext";

function Home (){
    const {user,setUser} = useContext(UserContext);
    // getting the variables of userContext - user(to get value), setUser(to set value)
    return(

        // rapped this component with UserContextProvider
        <UserContextProvier>

        </UserContextProvier>
    )
};

export default Home;