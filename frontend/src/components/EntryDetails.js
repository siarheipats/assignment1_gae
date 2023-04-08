import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const EntryDetails = ({ entry }) => {
    return (
        <div className="entry-details">
            <h4><strong>{entry.guestName}</strong> said:</h4>
            <p>{entry.entryText}</p>
            <p>{formatDistanceToNow(new Date(entry.createdAt), { addSuffix: true })}</p>
        </div>
    )
}

export default EntryDetails;