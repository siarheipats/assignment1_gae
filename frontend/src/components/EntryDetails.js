const EntryDetails = ({ entry }) => {
    return (
        <div className="entry-details">
            <h4><strong>{entry.guestName}</strong> said:</h4>
            <p>{entry.entryText}</p>
            <p>{entry.createdAt}</p>
        </div>
    )
}

export default EntryDetails;