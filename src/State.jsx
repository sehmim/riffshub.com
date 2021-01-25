import React, { createContext, useReducer } from "react";

import { getCurrentUser } from "./Util";

let AppContext = createContext({})

const initialState = {
    appName : "RiffsHub",
    currentUser: JSON.parse(localStorage.getItem("CognitoIdentityServiceProvider.4fjjmtrork0jvcsou5303lej8v.73cca8e7-1fa2-4a75-8038-09c7e811f596.userData"))
}

let reducer = (state, action) => {
    switch (action.type) {
        case "setAppName": {
            return {...state, appName: action.payload.appName}
        }

        default:
            break;
    }
}

function AppContextProvider(props) {
    const appState = {
        ...initialState
    }

    let [state, dispatch] = useReducer(reducer,appState)

    let value = { state, dispatch }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContext, AppContextProvider }