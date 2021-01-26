import React, { createContext, useReducer } from "react";

import { getCurrentUser } from "./Util";

let AppContext = createContext({})

const initialState = {
    appName : "RiffsHub",
    currentUser: null
}

let reducer = (state, action) => {
    switch (action.type) {
        case "setAppName": {
            return {...state, appName: action.payload.appName}
        }
        
        case "getCurrentUser" : {
            return { ...state, currentUser: action.payload }
        }
        case "signOutUser" : {
            return { ...state, currentUser: null }
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