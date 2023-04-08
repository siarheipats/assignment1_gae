import { useState } from 'react';
import { useEntriesContext } from '../hooks/useEntriesContext'

const EntryForm = () => {
    const { dispatch } = useEntriesContext();
    const [guestName, setGuestName] = useState('');
    const [entryText, setEntryText] = useState('');
    const [error, setError] = useState(null);

    const handleSubmitEntry = async (e) => {
        e.preventDefault();
        const newentry = { guestName, entryText };
        const response = await fetch('/api/entries', {
            method: 'POST',
            body: JSON.stringify(newentry),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            console.log(json);
            dispatch({ type: 'CREATE_ENTRY', payload: json });
            setError(null);
            setGuestName('');
            setEntryText('');
        }
    }

    return (
        <form className='create' onSubmit={handleSubmitEntry}>
            <h3>Add New Guest Book Entry</h3>
            <label>Your Name:</label>
            <input
                type='text'
                required={true}
                onChange={(e) => setGuestName(e.target.value)}
                value={guestName} />
            <label>Your Message:</label>
            <input
                type='text'
                required={true}
                onChange={(e) => setEntryText(e.target.value)}
                value={entryText} />
            {error && <div className='error'>{error}</div>}
            <button>Add Entry</button>
        </form>
    )
}

export default EntryForm;