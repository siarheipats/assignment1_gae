import { EntriesContext } from "../context/EntryContext";
import { useContext } from "react";

export const useEntriesContext = () => {
    const context = useContext(EntriesContext);
    if (!context) {
        throw Error('useEntriesontext should only be used inside the EntriesContextProvider');
    }

    return context;
}