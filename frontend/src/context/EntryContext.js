import { createContext, useReducer } from 'react'

export const EntriesContext = createContext()

export const entriesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ENTRIES':
            return {
                entries: action.payload
            }
        case 'CREATE_ENTRY':
            return {
                entries: [action.payload, ...state.entries]
            }
        default:
            return state
    }
}

export const EntriesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, {
        entries: null
    })

    return (
        <EntriesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </EntriesContext.Provider>
    )
}