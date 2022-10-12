import React, { useState } from "react";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";

function App() {



    /*================================
    const [authed, setAuthed] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleAuth = () => {
        setAuthed(true)
    }

    const handleIsAdmin = () => {
        setIsAdmin(true)
    }

       if (authed === false) {
        return ( 
            <div>
                <AuthPage handleIsAdmin={handleIsAdmin} handleAuth={handleAuth}/>
            </div>
        );
    }
    else if (authed === true && isAdmin === false) {
        return ( 
            <div>
                <Header isAdmin={isAdmin}/>
            </div>
        );  
    }
    else if (authed === true && isAdmin === true) {
        return ( 
            <div>
                <Header isAdmin={isAdmin} />
                Welcome, {nameA}
            </div>
        );  
    }
    ==================================*/
    
    return(
        <Header/>
    )
 
}

export default App;