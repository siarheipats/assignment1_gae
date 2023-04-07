import { useEffect, useState } from 'react';

import EntryDetails from "../components/EntryDetails";

const Home = () => {
    const [entries, setEntries] = useState(null);
    useEffect(() => {
        const fetchEntries = async () => {
            const response = await fetch('/api/entries');
            const json = await response.json();

            if (response.ok) {
                setEntries(json);
            }
        }

        fetchEntries();
    }, [])

    return (
        <div className="home">
            <div className='workouts'>
                {entries && entries.map((entry) => (
                    <EntryDetails key={entries._id} entry={entry} />
                ))}
            </div>
        </div>
    )
}

export default Home;