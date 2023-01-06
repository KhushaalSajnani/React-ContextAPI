import React, {createContext, useState, useEffect} from "react";


export const AuthContextV2 = createContext({
    isUserLoggedIn:false,
    onLogout:()=>{},
    onLogin:(users)=>{}
});

export const AuthContextProviderComponent = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const userData = localStorage.getItem('isLoggenIn');
        if(userData === '1'){
            setIsLoggedIn(true);
        }
    },[isLoggedIn]);

    function logoutHandler(){
        localStorage.clear();
        setIsLoggedIn(false)
    }
    function loginHandler(userData){
        console.log(userData);
        localStorage.setItem("isLoggenIn","1");
        setIsLoggedIn(true);
    }

    return(
        <AuthContextV2.Provider value={{
            isUserLoggedIn: isLoggedIn,
            onLogin:loginHandler,
            onLogout:logoutHandler
        }}>{props.children}</AuthContextV2.Provider>
    );
}
