import { useEffect } from 'react';
import { useEntriesContext } from '../hooks/useEntriesContext';

import EntryDetails from "../components/EntryDetails";
import EntryForm from '../components/EntryForm';

const Home = () => {
    const { entries, dispatch } = useEntriesContext();
    useEffect(() => {
        const fetchEntries = async () => {
            const response = await fetch('/api/entries');
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: 'SET_ENTRIES', payload: json });
            }
        }
        fetchEntries();
    }, [dispatch])

    return (
        <div className="home">
            <div className='workouts'>
                {entries && entries.map((entry) => (
                    <EntryDetails key={entry._id} entry={entry} />
                ))}
            </div>
            <EntryForm />
            <footer>Assignment 1 - GAE - Siarhei Pats. <a href='https://github.com/siarheipats/assignment1_gae'>Check out this project on GitHuib</a></footer>
        </div>
    )
}

export default Home;